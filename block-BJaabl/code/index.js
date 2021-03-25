/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/

function sayHello(name) {
  return alert(`Hello ${name}`);
}
sayHello("John");
/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`
}
getFullName ("Sachin", "Tendulkar");

/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/
function addTwoNumbers(firstNum, secondNum) {
  if (typeof firstNum === typeof 10 && typeof secondNum === typeof 10) {
    return firstNum + secondNum;
  } else {
    alert("Enter valid Input");
  }
}
addTwoNumbers(12, 45);
/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/

function calc(numA, numB, operation) {
    let result;
    switch (operation) {
      case "add":
        result = numA + numB;
        break;
      case "sub":
        result = numA - numB;
        break;
      case "mul":
        result = numA * numB;
        break;
        case "div":
        result = numA / numB;
        break;    
      default:
        alert('Enter a valid Input');
        break;
    }
    return result;
  }
 calc(26, 13, "div");

/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/
function isLeapYear(year) {
  let answer;
  if (year % 400 === 0) {
     answer = true;
  } else if (year % 100 === 0) {
     answer = false;
  } else if (year % 4 == 0) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}
isLeapYear(2000);

/*
6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
*/

function getFactorial(enteredNumber) {
  let factorial = 1;
  for (let i = 0; i < enteredNumber; i++) {
    factorial = factorial * ( enteredNumber - i);
  } return factorial
} 
getFactorial(2);