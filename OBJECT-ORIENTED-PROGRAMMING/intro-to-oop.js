var purchase1 = {
    shoes: 10,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log('Total price:', calculation);
    }
}

// purchase1.totalPrice();

//ALWAYS USE this keyword
//In the code below the this keyword can improve re-useablility since it allows us to not mention the object each time
// No need to remember the object name each time
var purchase2 = {
    shoes: 125,
    stateTax: 1.2,
    //method - below
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('Total price:', calculation);
    }
}

// purchase2.totalPrice();

//functional programming
var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes,tax) {
    return shoes * tax;
}

var toPay = totalPrice(shoes, stateTax);
// console.log(toPay);