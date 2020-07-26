const userSchema = require('./user');
const carSchema = require('./car');
const defaultSchema = require('./defaultSchema');

module.exports = [defaultSchema, userSchema, carSchema];