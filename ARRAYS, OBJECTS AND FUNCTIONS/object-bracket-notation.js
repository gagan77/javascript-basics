var house2 = {};
//each property as a string inside either single or double quotes
house2["rooms"] = 4;
house2["color"] = "red";
house2.color = "blue";
house2["priceUSD"] = 12345;
// console.log(house2);

var arrOfKeys = ["speed","altitude","color"];
var drone = {
    speed:100,
    altitude:200,
    color:"black"
}

for(var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]]);
}