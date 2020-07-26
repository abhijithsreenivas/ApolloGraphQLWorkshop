const { sequelize } = require('./database');

const UserModel = require('./user');
const CarModel = require('./car');

const models = [
    User,
    Car
];
/*
Object.keys(models).forEach( key => {
    if('associate' in models[key]){
        models[key].associate(models);
    }
});
*/
models.forEach(model => {
module.exports[model] = require('./'+model.lowercase());
});

