//var keyword

// console.log(user);

// var user = "Gagan";
// var user = "Simmi";
// var user = "Gaganpreet";

// console.log(user);


//let keyword

//1. We cannot access a let variable before we declare it
// console.log(user); //ERROR!!!
// let user;

//2 We can't redeclare a let variable
// let user = "gagan";

// user = "Anna"; // BUT can re-assign it
// console.log(user);


//const keyword - STRICTIST

// 1. The const variable MUST BE INITIALIZED
// console.log(user); //ERROR!
// const user;

//2. We CAN'T access the const variable before intialization
// console.log(user);
// const user = "Andrew";

//3. We CAN'T redeclare a const variable
// user = "Anna";


var globalVar = 77;

function scopeTest() {
    var localVar = 88;
}

console.log(localVar);