const express = require('express');
const app = express();
const { ApolloServer, gql } = require('apollo-server-express');
let cars = require('./data/cars').cars;
let users = require('./data/data').users;

const typeDefs = gql`
type Query {
    users: [User]
	user(id: Int!): User
    cars : [Car]
    car(color : String!) : Car
}

type User {
	id : ID!
    name : String!
    cars : [Car]
}

type Car {
    make : Int!
    model : String
    color : String
    owner : User!
}

type Mutation {
    createUser(id : Int!, name : String!) : User!
    removeUser(id : Int!) : Boolean
    createCar(make : Int!, model : String, color : String, ownedBy : Int!) : Car
    deleteCar(make : Int!) : Boolean
}

`;

const resolvers = {
    Query: {
        user: (parent, { id }) => {
            const user = users.filter(user => user.id === id);
            return user[0];
        },
        users: () => users,


        cars: () => cars,
        car: (parent, { color }) => {
            let car = cars.filter(car => car.color === color);
            return car[0];
        }
    },
    Car : {
        owner : parent => {
            return users.filter(user => user.id === parent.ownedBy)[0];
        } 
    },
    User : {
        cars : parent => {
            let carids = parent.cars;
            let userCar = carids.map(carId => cars[carId-1]);
            console.log("userCar" + userCar);
            return userCar;
        }
    },
    Mutation : {
        createUser : (parent, {id, name}) => {
            let user = {};
            user.id = id;
            user.name = name;
            users.push(user);
            return user;
        },
        removeUser : (parent, {id}) => {
            let isthere = false;
            users = users.filter((user) => {
                if(user.id === id){
                    isthere = true;
                }else
                    return user;
            });

            return isthere;

        },
        createCar : (parent, {make, model, color, ownedBy}) => {
            let newCar = {};
            newCar.make = make;
            newCar.model = model;
            newCar.color = color;
            newCar.ownedBy = ownedBy;
            cars.push(newCar);
            return newCar;
        },
        deleteCar: (parent, {make}) => {
            let isthere = false;
            cars = cars.filter((car) => {
                if(car.make === make){
                    isthere = true;
                }else
                    return car;
            });

            return isthere;
        }
    }
};


const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({ app });

app.listen(3000, () => { console.info('Apollo GraphQL Server is running on port 3000') });