let users = [{
    id: 1,
    name : 'Abhijith',
    cars : [1,2]
},{
    id: 2,
    name: 'Alaka',
    cars : []
},{
    id: 3,
    name : 'Amay',
    cars : [3]

},{
    id:4,
    name : 'Sreemathy',
    cars : [4]
}];

let cars = [{
    make: 2015,
    model : 'Hyunday',
    color : 'red',
    ownedBy : 1
},{
    make: 2014,
    model : 'Maruti',
    color : 'white',
    ownedBy : 4

},{
    make: 2018,
    model : 'Fiat',
    color : 'orange',
    ownedBy : 3

},{
    make: 2017,
    model : 'Suzuki',
    color : 'red',
    ownedBy : 2
}];


module.exports = { cars, users};