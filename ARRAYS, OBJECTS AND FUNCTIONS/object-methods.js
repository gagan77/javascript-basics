var  car = {};

//two properties in the car object
car["mileage"] = 98765;
car.color = "light-gray";

//methods in the car object
car.turnTheKey = function() {
    console.log('The engine is running');
}

car.lightsOn = function() {
    console.log('The light is on');
}

console.log(car);
car.turnTheKey();
car.lightsOn();