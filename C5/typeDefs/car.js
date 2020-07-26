const { gql } = require('apollo-server-express');

const typeDefs = gql`
extend type Query {
    cars : [Car]
    car(color : String!) : Car
}


type Car {
    make : Int!
    model : String
    color : String
    owner : User!
}

extend type Mutation {
    createCar(make : Int!, model : String, color : String, ownedBy : Int!) : Car
    deleteCar(make : Int!) : Boolean
}

`;

module.exports = typeDefs;