//  functional programming

//intialization of vars
var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate) {
    return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);
// console.log(currencyTwo);

//example 2

function doubleIt(num) {
    return num * 2
}

function objectMaker(val) {
    return {
        prop: val
    }
}

var objValue = objectMaker(20);
// console.log(objValue);
// console.log(typeof(doubleIt(10).toString()));

//global variable
let counter = 3;

function example() {
    // console.log(counter);
    counter = counter -1;
    if(counter === 0) return;
    example();
}

example()

//The Functional Programming Paradigm

function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
    console.log('random');
} else {
    getNumber = specificNum
    console.log('no random');
}

addTwoNums(getNumber(), getNumber())
