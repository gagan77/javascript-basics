//forEach method
/*
const fruits = ["Kiwi","mango","apple","pear"];
function appendIndex(fruit,index){
    console.log(`${index}. ${fruit}`);
}

fruits.forEach(appendIndex)

const veggies = ['onion', 'garlic', 'potato'];
//the functions first parameter is the current array item itself and the second optional parameter is the index
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});
*/

//filter method
//returns an array based on a specific test
/*
const nums = [0,10,20,30,40,50];
const filteredNums = nums.filter(function(num) {
    return num > 20;
})

console.log(filteredNums);


//map method
//Is used to map each array item over to another array's item, baseed on whatever work is performed inside the function
const mapNums = nums.map(function(num) {
    return num/10;
})

console.log(mapNums);
*/

//Important - choosing a proper data structure affects the very code that we write. 
//This is becuase the data structure iteself comes with some built-in functionality that mesk it easier to perform cettain tasks or 
//makes it harder or even impossible without converting your code to a proper data stucture
/*
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)
*/

//map doesn't have inheritance and no prototypes


//a set is a collection of unique values
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);