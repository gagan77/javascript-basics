/*

class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }

    //add as many methods as you want - WITHOUT using function keyword
    turbo () {
        console.log('turbo is on!');
    }
}
*/


// var car1 = new Car("Red",100);
// car1.turbo();


// The Principles of OOP
/*
class Animal {}
// var myDog = Object.create(Animal)
var myDog = new Animal()
*/
// console.log(Animal);

//inheritance
/*
class Animal { }
class Bird extends Animal {  }
class Eagle extends Bird { }
*/

//Encapsulation
"gagan".toUpperCase()

//Abstraction
 
//Polymorphism
/*
const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}
*/

//Inheritance and Polymorphism
/*
class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
// baldEagle.useWings(); // "Flying! Barely flapping!"
// kingPenguin.useWings(); // "Diving!"
*/

// create your classes here
/*
class Car {
    constructor(color,seats,windows,doors) {
        this.color = color;
        this.seats = seats;
        this.windows = windows;
        this.doors = doors;
    }

    amountOfDoors() {
        console.log("The car has", this.doors,"doors")
    }

    amountOfWindows() {
        conosole.log("The car has", this.windows,"windows")
    }

}
*/
// var honda = new Car("white", 5, 8, 4);
// honda.amountOfDoors();


// console.log(Math.pow(2,5));