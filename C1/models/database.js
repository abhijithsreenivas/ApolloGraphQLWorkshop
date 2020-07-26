const Sequelize = require('sequelize');
const sequelize = new Sequelize('graphql', 'root', 'Alaka2555',{
    dialect: 'mysql',
    host : 'localhost',
    operatorAlias : false,
    define: {
        timestamps : false
    }
});
console.log("Database connected.");
module.exports = {
    sequelize
}