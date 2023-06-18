// for loops
// for (i = 100; i > 0; i--) {
//   console.log(i);
// }
// console.log("Go!");

//while loop
// var counter = 3;
// while (counter >= 0) {
//   console.log(counter);
//   counter -= 1;
// }

// var counter = 1;
// while (counter <= 5) {
//   console.log(counter);
//   counter++;
// }
// console.log("Counting completed!");

//nested loops
// counting the weekdays in 2 week
/*
var week = 1;
while (week <= 2) {
  for (var day = 1; day <= 5; day++) {
    console.log("Week", week + " - ", "day", day);
  }
  console.log();
  week++;
}
*/

// counting summer months of 2023, 2024
// for (var year = 2023; year < 2025; year++) {
//   console.log(year);
//   for (var month = 6; month < 9; month++) {
//     console.log("------------", month);
//   }
// }

// multiplication table of 1-10
for (var multiple = 1; multiple <= 10; multiple++) {
  for (var multiplyBy = 1; multiplyBy <= 10; multiplyBy++) {
    console.log(multiple, "*", multiplyBy, " = ", multiple * multiplyBy);
  }
  console.log();
}
