const resolvers = {
    Query: {
        user: (parent, { id }, { models }) => {
            const user = models.users.filter(user => user.id === id);
            return user[0];
        },
        users: (parent, args, { models }) => models.users
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
        createUser : (parent, {id, name}, { models }) => {
            let user = {};
            user.id = id;
            user.name = name;
            models.users.push(user);
            return user;
        },
        removeUser : (parent, {id}, { models }) => {
            let isthere = false;
            users = models.users.filter((user) => {
                if(user.id === id){
                    isthere = true;
                }else
                    return user;
            });

            return isthere;

        }
    }
};

module.exports = resolvers;