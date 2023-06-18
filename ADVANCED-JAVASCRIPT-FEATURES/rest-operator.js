const top7 = ["The Colosseum","The Roman Forum","The Vatican","Trevi Fountain","The Pantheon","Piazza Venezia","The Palatine Hill"];

const [] = top7;
//from top7 it takes out the first three elements
const [first,second,third, ...secondVisit] = top7;
// console.log(secondVisit); // gives us the left over items taken out from the above statement

//rest should be the last item in the parameter of an function
function addTaxToPrices(taxRate, ...itemsBought) {
    return itemsBought.map(item => taxRate * item)
}
let shoppingCart = addTaxToPrices(1.1,46,89,35,79);
console.log(shoppingCart);
