const car = {
    engine: true,
    steering: true,
    speed:"slow"
}

const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log('The sportsCar object: ',sportsCar);

console.log('--- for-in is unreliable ---');
// for in loop iterate over property and property type
for(let prop in sportsCar) {
    console.log('🤔',prop);
}
// console.log('😂','Iterating over object AND its prototype!');

console.log('--- for-of is reliable ---');
//for of loop iterate over ONLY for objects properties
for(let prop of Object.keys(sportsCar)) {
    console.log('🎯',prop + ": " + sportsCar[prop]);
}


//The for-of loop will iterate over the object's own properties only when using the Object.keys() method to return an array to loop over.
//The for-of loop will not iterate over the object and its prototype properties.