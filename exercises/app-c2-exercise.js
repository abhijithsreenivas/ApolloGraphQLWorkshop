const express = require('express');
const app = express();
const { ApolloServer, gql } = require('apollo-server-express');
const cars = require('../data/cars').cars;

const typeDefs = gql`
type Query {
    cars : [Car]
    car(color : String!) : Car
}

type Car {
    make : Int!
    model : String
    color : String
}

`;

const resolvers = {
    Query : {

        cars : () => cars,
        car : (parent, { color }) => {
            let car = cars.filter(car => car.color === color);
            return car[0];
        }
    }
};


const server = new ApolloServer ({
    typeDefs,
    resolvers
});

server.applyMiddleware({ app });

app.listen(3000, () => {console.info('Apollo GraphQL Server is running on port 3000')});