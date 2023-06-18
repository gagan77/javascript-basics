function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

//two instances - Icecream types
let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
// kiwiIcecream.meltIt();
// console.log(appleIcecream.flavor);

let apple = new String("apple");
let applePie = new String("apple");
// Each object in javascript is unique, you CAN't compare a String object with another String object
// console.log(apple == applePie); // memory locations are compared not the values passed in the constructor
// apple; // --> String {'apple'}
// console.log(apple);
// console.log(applePie);

//more performant than apple variable, which is an object
let pear = "pear";
// console.log(pear);


console.log("abcd".match(/d/)); // null
console.log("abcd".match(/a/));