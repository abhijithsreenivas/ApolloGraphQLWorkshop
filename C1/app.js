const express = require('express');
const app = express();
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./typeDefs/index');
const resolvers = require('./resolvers/index');
const models = require('./models/index');

const me = models.users[0];

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context : {
        models,
        me
    }
});

server.applyMiddleware({ app });

app.listen(3000, () => { console.info('Apollo GraphQL Server is running on port 3000') });