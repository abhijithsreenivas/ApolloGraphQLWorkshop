const { gql } = require('apollo-server-express');

const typeDefs = gql`
extend type Query {
    users: [User]
	user(id: Int!): User
}

type User {
	id : ID!
    name : String!
    cars : [Car]
}

extend type Mutation {
    createUser(id : Int!, name : String!) : User!
    removeUser(id : Int!) : Boolean
}

`;

module.exports = typeDefs;