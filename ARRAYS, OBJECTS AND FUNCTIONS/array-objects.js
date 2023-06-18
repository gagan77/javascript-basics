var fruits = [];
fruits.push("apple");
fruits.push("orange");

// console.log(fruits);

var lastItemOut = fruits.pop()
// console.log(fruits);

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

var fruitArr = arrayBuilder("Apple","Orange","Carrot");
// console.log(fruitArr);s