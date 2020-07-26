
const resolvers = {
    Query: {
        cars: (parent, args, { models }) => models.cars,
        car: (parent, { color }, {models}) => {
            let car = models.cars.filter(car => car.color === color);
            return car[0];
        }
    },
    Car : {
        owner : (parent, args, {models}) => {
            return models.users.filter(user => user.id === parent.ownedBy)[0];
        } 
    },
    Mutation : {
        createCar : (parent, {make, model, color, ownedBy}, { models }) => {
            let newCar = {};
            newCar.make = make;
            newCar.model = model;
            newCar.color = color;
            newCar.ownedBy = ownedBy;
            models.cars.push(newCar);
            return newCar;
        },
        deleteCar: (parent, {make}, {models}) => {
            let isthere = false;
            models.cars = models.cars.filter((car) => {
                if(car.make === make){
                    isthere = true;
                }else
                    return car;
            });

            return isthere;
        }
    }
};

module.exports = resolvers;