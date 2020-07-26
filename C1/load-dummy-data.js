const { sequelize } = require('./models/database');
const models = require('./models');

const createData = async () => {

    console.log(models);
    await models.User.create({
        name : 'Abhijith',
        cars : [{
            make : 'Merceds',
            model : 'A250',
            colour : 'black'
        }] 
    }, {
        include: [models.Car]
    }
    );

    await models.User.create({
        name : 'Alaka',
        cars : [{
            make : 'Audi',
            model : 'A6',
            colour : 'White'
        }] 
    }, {
        include: [models.Car]
    }
    );

    await models.User.create({
        name : 'Amay Abhijith',
        cars : [{
            make : 'Ford',
            model : 'Figo',
            colour : 'red'
        }] 
    }, {
        include: [models.Car]
    }
    );

}

sequelize.sync({ force: true }).then(async () => {
    try {
        await createData();
    } catch (err) {
        console.error(err);
    }

});