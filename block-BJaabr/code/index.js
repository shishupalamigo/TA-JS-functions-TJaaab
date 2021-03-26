// -Look at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration

function addOne(a) {
  return a + 1;
}

// - Write a Function Expression

let addOne = function (a) {
  return a + 1;
}

// - Write an Arrow Function without curly brackets(if possible)

let addOne = (a) => a + 1;

// - Write an Arrow Function with curly brackets

let addOne = (a) => {
  return a + 1;
}

// - Execute the function

addOne(26);

// - Execute the function and store the return value in a variable.

let result = addOne(27);

// - What is the typeof returnValue

// The type of 'result' is number.

//

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration

function substractOne(n) {
  return n - 1;
}

// - Write a Function Expression

let substractOne = function (n) {
  return n - 1;
}

// - Write an Arrow Function without curly brackets(if possible)

let substractOne = (n) => n - 1;

// - Write an Arrow Function with curly brackets

let substractOne = (n) => {
  return n - 1;
}

// - Execute the function

substractOne(20);

// - Execute the function and store the return value in a variable.

let finalResult = substractOne(20);

// - What is the typeof returnValue

// The typeof finalResult is number.

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(a, b) {
  return a + b;
}

// - Write a Function Expression

let sum = function (a, b) {
  return a + b;
}

// - Write an Arrow Function without curly brackets(if possible)

let sum = (a, b) => a + b;

// - Write an Arrow Function with curly brackets

let sum = (a, b) => {
  return a + b;
}

// - Execute the function

sum(25, 27);

// - Execute the function and store the return value in a variable

let returnValue = sum(25, 26);

// - What is the typeof returnValue

// The type of 'returnValue' is number.

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration

function square(n) {
  return n * n;
}

// - Write a Function Expression

let square = function (n) {
  return n * n;
}

// - Write an Arrow Function without curly brackets(if possible)

let square = (n) => n * n;

// - Write an Arrow Function with curly brackets

let square = (n) => {
  return n * n;
}

// - Execute the function

square = (25);

// - Execute the function and store the return value in a variable

let returnValue = square(26);

// - What is the typeof returnValue

// The type of 'returnValue' is number.

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration

function isGreater(x, y) {
  return x > y;
}

// - Write a Function Expression

let isGreater =  function (x, y) {
  return x > y;
}

// - Write an Arrow Function without curly brackets(if possible)

let isGreater =  (x, y) => x > y;


// - Write an Arrow Function with curly brackets

let isGreater = (x, y) => {
  return x > y;
}

// - Execute the function

isGreater(57, 45);

// - Execute the function and store the return value in a variable

let returnValue = isGreater(57, 45);

// - What is the typeof returnValue

// The type of 'returnValue' is boolean.

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration

function oddOrEven(n) {
  if (n % 2 === 0) {
    return `Number is Even`;
  } else if (n % 2 !== 0 && typeof n === typeof 1) {
    return `Number is Odd`;
  } else if (typeof n !== 'number'){
    return `Enter Valid Input`;
  }
}

// - Write an anonymous Function Expression

let oddOrEven = function (n) {
  if (n % 2 === 0) {
    return `Number is Even`;
  } else if (n % 2 !== 0 && typeof n === typeof 1) {
    return `Number is Odd`;
  } else if (typeof n !== 'number'){
    return `Enter Valid Input`;
  }
}

// - Write an named Function Expression

let oddOrEven = function findOddOrEven(n) {
  if (n % 2 === 0) {
    return `Number is Even`;
  } else if (n % 2 !== 0 && typeof n === typeof 1) {
    return `Number is Odd`;
  } else if (typeof n !== 'number'){
    return `Enter Valid Input`;
  }
}

// - Write an Arrow Function without curly brackets (hint: use ternary operator)

let oddOrEven = (n) => n % 2 === 0 ? `Number is even` : (n % 2 !== 0 && typeof n === typeof 1 ? `Number is odd` : `Enter a Valid Input`); 

// - Write an Arrow Function with curly brackets

let oddOrEven = (n) => {
  if (n % 2 === 0) {
    return `Number is Even`;
  } else if (n % 2 !== 0 && typeof n === typeof 1) {
    return `Number is Odd`;
  } else if (typeof n !== 'number'){
    return `Enter Valid Input`;
  }
}

// - Execute the function

oddOrEven(12);

// - Execute the function and store the return value in a variable

let returnValue = oddOrEven();

// - What is the typeof returnValue

// The typeof returnValue is string.
