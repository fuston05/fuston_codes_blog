// *****************************************************************
//  ****************** 2 vars, swap 2 using temp *******************

// let varA = "awesome!";
// let varB = "javaScript is";

// console.log("\nbefore swap: ", varA, varB); //  awesome! javaScript is

// // temp var swap
// const temp = varA;
// varA = varB;
// varB = temp;

// console.log('\nswapped: ', varA, varB); //javaScript is awesome!

// *****************************************************************
//  *********************** 2 vars, swap 2 *************************

// let varA = 'awesome!';
// let varB = 'javaScript is';

// console.log('\nbefore swap: ', varA, varB); //  awesome! javaScript is

// // // array destructuring variable swap
// [varB, varA] = [varA, varB];

// console.log('\nswapped: ', varA, varB); //javaScript is awesome!

// *****************************************************************
//  ********************** 3 vars, swap all 3 **********************

// let varA = 'awesome!';
// let varB = 'javaScript';
// let varC = 'is really super';

// console.log('\nbefore swap: ', varA, varB, varC); //  awesome! javaScript is really super

// // // array destructuring variable swap
// [varC, varA, varB] = [varA, varB, varC];

// console.log('\nswapped: ', varA, varB, varC); //javaScript is really super awesome!

// *****************************************************************
// ************************* 3 vars, swap 2 ************************

// let varA = 'is really super';
// let varB = 'javaScript';
// let varC = 'awesome!';

// console.log('\nbefore swap: ', varA, varB, varC); //  is really super javaScript awesome!

// // // array destructuring variable swap
// [varB, varA] = [varA, varB]; // omit varC altogether since we don't need to swap it.

// console.log('\nswapped: ', varA, varB, varC); //javaScript is really super awesome!

// *****************************************************************
// ******* 3 vars, swap only 2 using placeholder identifier ********

// let varA = 'awesome!';
// let varB = 'is really super';
// let varC = 'javaScript';

// console.log('\nbefore swap: ', varA, varB, varC); //  awesome! is really super javaScript

// // // array destructuring variable swap
// [varC, _, varA] = [varA, varB, varC]; // using the placeholder identifier
// // [varC, , varA] = [varA, varB, varC]; // just using the "," as a placeholder

// console.log('\nswapped: ', varA, varB, varC); //javaScript is really super awesome!

// *****************************************************************
//  ******************** swapping array values *********************

// let arr = [1, 2, 3];

// console.log("\nbefore swap: ", arr); // [1, 2, 3]

// // destructuring assigment variable swap
// [arr[0], arr[1]] = [arr[1], arr[0]];

// console.log("\nswapped: ", arr); // [ 2, 1, 3 ]

// *****************************************************************
// ****************** swapping object properties *******************

let obj = {
  varA: "is awesome!",
  varB: "JavaScript",
};

console.log("\nbefore swap: ", obj.varA, obj.varB); // is awesome! JavaScript

// swap properties
[obj.varB, obj.varA] = [obj.varA, obj.varB];

console.log("\nswapped: ", obj.varA, obj.varB); // JavaScript is awesome!
