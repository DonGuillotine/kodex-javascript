// ***************************** Values and Variables ********************************
console.log("Hello World!");


let firstName = "Donald";

console.log(firstName);


// ************************** Variable Naming Conventions *****************************
let last_name2 = "John"
let _function = 50;

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

console.log(`Hello how are you doing`);

console.log('This is \n\
for multiple \n\
lines');

console.log(`This
is
for multiple
lines`);


// ******************************** Taking Decision: if / else statements *************************************
const kelsAge = 35;

// If statement only executes when the expression evaluated to true
if(kelsAge >= 18){
    console.log(`Kels is eligible to drink Alchohol 🍷 cos his age is ${kelsAge}`);
}
// Else statement executes when the if statement returns false
else{
    const yearsLeft = 18 - kelsAge;
    console.log(`Kels is not eligible to drink alchohol 🥲. Wait another ${yearsLeft} years`);
}

let dayOfTheWeek = 'Monday';

if(dayOfTheWeek == 'Monday'){
    console.log('SIT AT HOME 🏠')
}
else{
    console.log('Write some code!');
}


////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// Step 1 - Store Mark and John's mass and height in variables

// Step 2 - Mark and John's BMI using the formular: BMI = mass / height ** 2 
markBMI = markMass / markHeight ** 2; // markMass / markHeight * markHeight
johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);


// Step 3 - Create a boolean variable 'markHigherBMI'
if(markBMI > johnBMI){
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`)
}
else{
    console.log(`John's BMI ${johnBMI} is higher than Marks's ${markBMI}!`)
}


// ******************************************** Type Conversion and Coercion *****************************************

// Type conversion is the process of converting a value from one type to another
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 10);


console.log(Number('Donald'));
console.log(typeof NaN);

console.log(String(23), 23);


// Type Coersion

// Type coersion is when JavaScript coerces or changes a data type by itself
const sum = 35 + 'hello';
console.log(sum);

console.log('23' - '10' - 3);

console.log('24' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);


// ************************************** Truthy and Falsy Values ********************************************

// We have 5 Falsey Values: 0, '', undefined, null, Nan
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));


const money = 100;

if(money){
    console.log('Go on a shopping spree!');
}
else{
    console.log('Dont spend the money');
}

let product = 0;
if(product){
    console.log('Stay home');
}
else{
    console.log('Go on a shopping spree!');
}


// *************************************************** Logical Operators ********************************************
/* Logical Operators are used to determine the logic between vairables or values
    && is the AND Operator
    || is the OR Operator
    ! is the NOT Operator   
*/
const hasDriversLicense = true;
const hasGoodVision = false;
const isTired = false;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);


if(hasDriversLicense && hasGoodVision || isTired){
    console.log('Nonse is eligible to drive');
}
else{
    console.log('Someone else should drive');
}

/* Coding Challange 3 - If Statements and Opeartors
There are two football teams, Manchester and Barcelona. They compete against each other 3 times. The team with the highest average score will win the trophy!

1. Calculate the average score for each team using the test data below.

2. Compare the average scores of the teams to determine the winner of the competition and display it on the console. Remember to account for a possible draw, where both teams have the same average score.

3. BONUS 1: Introduce a minimum score requirement of 100. According to this rule, a team can only win if it has a higher score than the other team and a score of at least 100 points. Hint: Use a logical operator to test for the minimum score, along with multiple else-if blocks. 😉

4. BONUS 2: The minimum score requirement also applies to a draw. A draw will only occur if both teams have the same score and both teams have a score greater than or equal to 100 points. Otherwise, neither team wins the trophy.

TEST DATA: Manchester scores 96, 108, and 89. Barcelona scores 88, 91, and 110.
TEST DATA BONUS 1: Manchester scores 97, 112, and 101. Barcelona scores 109, 95, and 123.
TEST DATA BONUS 2: Manchester scores 97, 112, and 101. Barcelona scores 109, 95, and 106.

GOOD LUCK! 😀

*/
// Step 1
const manchesterScore = (96 + 108 + 89) / 3;
const barcelonaScore = (88 + 91 + 110) / 3;

console.log(manchesterScore, barcelonaScore);

// Step 2
if(manchesterScore > barcelonaScore){
    console.log('Manchester wins the trophy 🏆');
}
else if(manchesterScore < barcelonaScore){
    console.log("Barcelona wins the trophy 🏆");
}
else if(manchesterScore === barcelonaScore){
    console.log('Its a Draw!, Both Teams win 😉');
}


// Step 3
const manchesterScore2 = (97 + 112 + 101) / 3;
const barcelonaScore2 = (109 + 95 + 123) / 3;
console.log(manchesterScore2, barcelonaScore2);

if(manchesterScore2 > barcelonaScore2 && manchesterScore2 >= 100){
    console.log("Manchester wins the trophy 🏆");
}
else if(barcelonaScore2 > manchesterScore2 && barcelonaScore2 >= 100){
    console.log("Barcelona wins the trophy 🏆");
}
else if(manchesterScore2 === barcelonaScore2 && manchesterScore2 >= 100 && barcelonaScore2 >= 100){
    console.log("Both wins the trophy 🏆");
}
else{
    console.log("No one wins 😭");
}



// ********************************* The Switch Statement ********************************
const day = "tuesday";

switch(day){
    case 'monday':
        console.log('Sit at home');
        break;
    case 'tuesday':
        console.log('Go for JavaScript Class');
        break;
    case 'wednesday':
        console.log('Go to the Gym');
        break;
    case 'thursday':
    case 'friday':
        console.log('Bake some Cake');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Write some code!');
        break;
    default:
        console.log('Don"t do anything');
}

// Switch statement logic in if else blocks
if(day === 'monday'){
    console.log('Sit at home');
}
else if(day === 'tuesday'){
    console.log('Go for class');
}
else if(day === 'thursday' || day === 'friday'){
    console.log('Bake some Cake');
}
else{
    console.log('Dont do anything');
}



// ************************* The Ternary Operator ************************************

// if(age >= 18){
//     console.log('I love Alcohol'); 
// }
// else{
//     console.log('I like Capri Sun'); 
// }

const age = 4;
age >= 18 ? console.log('I love Alcohol') : console.log('I like Capri Sun');


////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);



// ********************************* Functions ******************************************
function sayHiToDonald(){
    console.log('My name is Donald. Say Hi!');
}

// In order for the function to be used it has to be invoked / called
sayHiToDonald();
sayHiToDonald();
sayHiToDonald();
sayHiToDonald();
sayHiToDonald();
sayHiToDonald();


function getFriutName(item1, item2){
    const juice = `Friut Salad is made with ${item1} and ${item2}`;
    return juice;
}

const friutSalad = getFriutName('Cabbage', 'Carrot');
console.log(friutSalad);

console.log(getFriutName('Eggs', 'Milk'));
console.log(getFriutName('Paw Paw', 'Peanut'));


// ************************** Function Declearation and Function Expressions *******************************

// Function Declaration
function calculateAge(birthYear){
    return 2023 - birthYear;
}

console.log(calculateAge(1998));

// Function Expressions
// let a = b + c
const calculateAge1 = function(birthYear){
    return 2023 - birthYear;
}

console.log(calculateAge1(1989));


// ********************************* Arrow Functions ***********************************
// const calculateAge2 = birthYear => 2023 - birthYear;
// console.log(calculateAge2(1717));


// const yearsUntillRetirement = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 60 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntillRetirement(1965, 'Donald'));
// console.log(yearsUntillRetirement(2006, 'Nonso'));


// ***************************** Functions Calling other Functions ***********************
function cutFriutPieces(friutNumber){
    return friutNumber * 4;
}


function friutProcessor(item1, item2){
    const item1Pieces = cutFriutPieces(item1);
    const item2Pieces = cutFriutPieces(item2);

    const juice = `Juice is made with ${item1Pieces} pieces of Oranges and ${item2Pieces} pieces of Bananas`;
    return juice;
}

console.log(friutProcessor(3, 2));


// *************************** Reviewing Functioons *************************************

const calculateAge2 = birthYear => 2023 - birthYear;
console.log(calculateAge2(1717));


const yearsUntillRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 60 - age;
    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement
    }
    else{
        console.log(`${firstName} has already retires`);
        return -1;
    }
}

console.log(yearsUntillRetirement(1965, 'Donald'));
console.log(yearsUntillRetirement(1945, 'Nonso'));


/* CODING CHALLANGE 6 ~ Functions!
                            Manchester and Barcelona. 
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgManchester' and 'avgBarcelone'),
 and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Barcelons win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Manchester scores 44, 23 and 71. Barcelona scores 65, 54 and 49
TEST DATA 2: Manchester scores 85, 54 and 41. Barcelona scores 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// Task 1
const calcAverage = (a, b, c) => (a + b + c) / 3;

// Task 2
let scoreManchester = calcAverage(44, 23, 71);
let scoreBarcelona = calcAverage(65, 54, 49);
console.log(scoreManchester, scoreBarcelona);

// Task 3
const checkWinner = function (avgManchester, avgBarcelona){
    if(avgManchester >= 2 * avgBarcelona){
        console.log(`Manchester wins 🔥 (${avgManchester} vs ${avgBarcelona})`);
    }
    else if(avgBarcelona >= 2 * avgManchester){
        console.log(`Barcelona wins 🔥 (${avgBarcelona} vs ${avgManchester})`);
    }
    else{
        console.log(`Nobody won 💀`);
    }
}

// Task 4
checkWinner(scoreManchester, scoreBarcelona);
// console.log(finale);

let scoreManchesterTwo = calcAverage(85, 54, 41);
let scoreBarcelonaTwo = calcAverage(23, 34, 27);
console.log(scoreManchesterTwo, scoreBarcelonaTwo)

checkWinner(scoreManchesterTwo, scoreBarcelonaTwo);



// ************************************ Introduction to Arrays ***************************
let student1, student2, student3;
student1 = "Donald";
student2 = "Somto";
student3 = "Micheal";

// Method 1
const friends = ['Ugo', 'Prisca', 'David', 'Divine'];
console.log(friends);
console.log(friends[1]);
console.log(friends.length);

friends[1] = "Donald";
console.log(friends);


// Method 2
// const people = new Array('Joseph', 'Donald', 23, 81);
// console.log(people);

// More on Arrays
const findAge = function(birthYear){
    return 2023 - birthYear;
}

const years = [1990, 1965, 1914, 1945, 2000];

const age1 = findAge(years[0]);
const age2 = findAge(years[1]);
const age3 = findAge(years[years.length - 1]);

console.log(age1, age2, age3);

// **************************************** Array Methods *******************************
const newFriends = ['Ugo', 'Prisca', 'Henry', 'Divine', 'David'];

/* Add Elements
    The Push Method Appends new elements to the end of an array, and returns the new length of the array.
*/
const newLength = newFriends.push('Donald');
console.log(newFriends);
console.log(newLength);

/* The unshift Method Inserts new elements at the start of an array, and returns the new length of the array. */
newFriends.unshift('Kels');
console.log(newFriends);


/* Removing Elements
    The pop Method Removes the last element from an array and returns it. */
newFriends.pop();
console.log(newFriends);

// Removes the first element from an array 
newFriends.shift();
console.log(newFriends);

console.log(newFriends.indexOf('Divine'));

console.log(newFriends.includes('Henry'));

if(newFriends.includes('Divine')){
    console.log('He is a Senior Dev ✨💪🏿');
}
else{
    console.log('He still de learn work 🤣');
}

/*                              Coding Challange 7 ✨
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
// Task 1
const calculateTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

console.log(calculateTip(100));


// Task 2
const bills = [125, 555, 44];

// Task 3
const tips = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])];


// Task 4
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);