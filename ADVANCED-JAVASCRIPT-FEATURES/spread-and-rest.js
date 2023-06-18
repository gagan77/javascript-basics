const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']

//concatenates both arrays into single array
const fruitsAndBerries = [...fruits,...berries];
//console.log(fruitsAndBerries);


const flying = {wings:2}
const car = {wheels:4}
//concatenates both objects into a single object of flyingCar
const flyingCar = {...flying,...car}
// console.log(flyingCar);

let veggies = ['onion','parsley'];
//adds the existing veggies with the last two elements also into the veggies array
veggies = [...veggies,'carrot','beetroot'];
// console.log(veggies);


//convert a string to an array using the spread operator
const greeting = "Hello";
const arrayOfChars = [...greeting];
//console.log(arrayOfChars);

const car1 = {
    speed:200,
    color:"yellow"
}

//car2 same as car1
const car2 = {...car1}

//now car2 speed property differs as it reads a speed of 201
car1.speed = 201;

// console.log(car1.speed,car2.speed);

const fruits1 = ["apples","pears"]
const fruits2 = [...fruits]
fruits1.pop()
console.log(fruits1,"not",fruits2);


const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);