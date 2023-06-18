class Train {
    //no function keyword is used to define a constructor
    //this represents its the future object instance of the Train class
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    //below are 4 methods
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}
//new instance of the Train class
var train1 = new Train("red", false);
console.log(train1.toggleLights());
// console.log(train1.lightsStatus());
// console.log(train1.getSelf());
// console.log(train1.getPrototype());


//inhertiance - where the child class has more properties that DNE in parent class
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        //super is used to specifiy what property gets inherited from the super-class in the sub-class
        //in this case we choose to inherit both color and lightsOn properties on sub-class HighSpeedTrain
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        //again the super is used to access the methods of the super-class
        super.toggleLigths();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
console.log(train5);
console.log(highSpeed1);
