const jsonStr = '{"greeting":"hello"}';

const aPlainObj = JSON.parse(jsonStr);
console.log(aPlainObj);
aPlainObj.greeting = "Bonjour";

console.log(aPlainObj.greeting);

const data = {
    firstName:"John",
    lastName:"Doe",
    greeting:"Hello",
    age:7
}

// const dataStr = JSON.parse(data);
// console.log(dataStr);



class Cake {
    constructor(lyr) {
        this.layers = lyr;
    }

    getLayers() {
        return this.layers;
    }
}

class WeddingCake extends Cake {
    constructor() {
        super(2);
    }

    getLayers() {
        return super.getLayers() * 5;
    }
}

var result = new WeddingCake();
console.log(result.getLayers());