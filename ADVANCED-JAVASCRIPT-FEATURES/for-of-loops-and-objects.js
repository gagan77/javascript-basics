const car2 = {
    speed:200,
    color:"red"
}

//returns an array of strings, where each string a property key of the peroperies contained in my car2 object
// console.log(Object.keys(car2));
//returns the values assocatied with each key
// console.log(Object.values(car2));
//returns both key and values
// console.log(Object.entries(car2)); //[ [propertyKey, propertyValue], [propertyKey, propertyValue] ]


var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for(let key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key]) //accessing objects using bracket notation
}

function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();