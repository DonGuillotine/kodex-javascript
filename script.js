// ***************************** Values and Variables ********************************
console.log("Hello World!");


let firstName = "Donald";

console.log(firstName);


// ************************** Variable Naming Conventions *****************************
let last_name2 = "John"
let $function = 50;

let birthYear = 1990;

console.log(last_name2);


// ******************************* Data Types ************************************

/*
JavaScript has 8 Datatypes
    1. String
    2. Number
    3. Bigint
    4. Boolean
    5. Undefined
    6. Null
    7. Symbol
    8. Object
 */

// 1. Booleans->True or False Values
var javaScriptIsEasy = true;
var lifeisHard = false;

console.log(typeof lifeisHard);

// 2. Numbers
donaldAge = 150;
nonsoAge = 90.5;

console.log(typeof donaldAge);
console.log(typeof nonsoAge);

// 3. Strings
let message = "Welcome to Dubai";
console.log(typeof message);

let divine = '24';
console.log(typeof divine)


let henry = '24' + 2;
console.log(typeof henry);


//4. undefined
let year;
console.log(year);
console.log(typeof year)


// An empty value has nothing to do with undefined.
let david = '';
console.log(typeof david);


// Value is undefined, type is undefined
let car = undefined;
console.log(typeof car)


// When adding a number and a string, JavaScript will treat the number as a string.
let vehicle = 16 + 4 + "Volvo"
console.log(vehicle);

/* 5. Null

    In JavaScript null is nothing. It is supposed to be something that doesn't exist
    The data type of null is an object

*/
let prisca = null;
console.log(typeof prisca);

/**
 * Difference between undefined and null
 * Typeof undefined is undefined
 * Typeof null is object 
 */

// undefined and null are equal in value
console.log(null == undefined);


// ******************************** let, const and var *********************************

/* The let keyword

The let keyword was introduced in ES6 (2015)

    **Rules**
    1. let cannot be Redeclared
    2. let must be Declared before use
    3. let has Block Scope
*/


// 1. let cannot be Redeclared
let ugo = "Ugochukwu";
// let ugo = "Kodex Student"; -> Cannot be redeclared


// var can be redeclared
var kels = "Kodex Student";
var kels = "Laravel Developer";

console.log(kels);


// Block Scope
// ----------------let has block scope----------------------

{
    let job = 5;
}

// console.log(job);

// --------------- var does not have block scope------------------
{
    var animal = "Lion"
}

console.log(animal);


// ------------------Redeclaring a variable inside a block will also redeclare the variable outside the block-----------------------------------------
var macBook = 10;

{
    var macBook = 200;
}

console.log(macBook);


//--------------------------Redeclaring a variable inside a block will not redeclare the variable outside the block--------------------

let windows = 5;

{
    let windows = 9000;
}

console.log(windows);

/* Hoisting -> You can use the variable before it is declared 
-------let and const are not hoisted-----------
*/
linux = "Ubuntu";
var linux;


/* The const keyword

The const keyword was introduced in ES6 (2015)

    **Rules**
    1. const cannot be Reassigned
    2. const cannot be Redeclared
    3. const has Block Scope
*/


// const cannot be Reassigned
const costFromTempSiteToKodex = 150;
// costFromTempSiteToKodex = 100;
console.log(costFromTempSiteToKodex);

/**
 * Always declare a variable with const when you know that the value should not be 
 * changed.
 */


// ********************************* Basic Operators *************************************


// Math Operators
const now = 2023;
const divineAge = now - 1990;
const davidAge = now - 1981;

console.log(divineAge, davidAge);


// Multiplication, Division and Raise to power
console.log(divineAge * 2, divineAge / 10, 2 ** 3);


/**
 * Create 2 variables
 * The datatype must be strings
 * Concatenate (Add) the two varaibles
 * And display the result in the console
 */

let bestSeries, bestMovie;

bestSeries = "From";
bestMovie = "Extraction"


console.log(bestSeries + ' ' + bestMovie);



// ----------------------------------Assignment Operator (=) ----------------------------
let numberOne = 10 + 15;
numberOne += 5;
// numberOne = numberOne + 5;
console.log(numberOne);


let numberTwo = 2 + 5;
numberTwo *= 7;
// Can be rewritten as:
numberTwo = numberTwo * 7;

let nummberThree = 1;
nummberThree++;
// Can be rewritten as:
nummberThree = nummberThree + 1;

let numberFour  = 4;
numberFour--;
// Can be rewritten as:
numberFour = numberFour - 1;



// ---------------------------- Comparison Operators ( >, <, >=, <=, ==, ===) --------------------------------
let ugoAge, olisaAge;
ugoAge = '35';
olisaAge = 35;

console.log(ugoAge === olisaAge);


// ----------------------------- Operator Precedence ---------------------------------
const yearNow = 2023;
const josephAge = yearNow - 1999;
const henryAge = yearNow - 1990;

console.log((josephAge + henryAge) * 10);
// 22 + 33 * 10




/* -------------------- CODING CHALLANGE -> JavaScript Operators -------------------------

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

*/

// Step 1 - Store Mark and John's mass and height in variables
let markMass, markHeight, johnMass, johnHeight, markBMI, johnBMI, markHigherBMI;
markMass = 78;
markHeight = 1.69;

johnMass = 92;
johnHeight = 1.95;


// Step 2 - Mark and John's BMI using the formular: BMI = mass / height ** 2 
markBMI = markMass / markHeight ** 2; // markMass / markHeight * markHeight
johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);


// Step 3 - Create a boolean variable 'markHigherBMI'
markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);


// *********************************** Strings and Template Literals ********************
const myName = 'Donald';
const myJob = 'Developer';
const yearOfBirth = 1717;
const currentYear = 2077;

const donald = "I'm " + myName + ', a ' + (currentYear - yearOfBirth) + ' year old ' + myJob + '!';
console.log(donald);


const newDonald = `I'm ${myName}, a ${currentYear - yearOfBirth} year old ${myJob}!`;
console.log(newDonald);