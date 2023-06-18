// Before error handling
/*
console.log(a+b);
console.log('This line is never reached');

// throw new ReferenceError();
Error handling in place
*/

// After error handling
/*
try {
    // console.log(a+b);
    throw new SyntaxError();
} catch(err) {
    console.log(err);
    // console.log('There was an error');
    // console.log('The error was saved in the error log');
}
console.log('My program does not stop');
*/


console.log((10).toString(2));
console.log((10).toString(8));
console.log((10).toString(16));

