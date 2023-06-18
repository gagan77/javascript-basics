class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound,canFly, color,energy) {
        super(sound,canFly, color,energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}