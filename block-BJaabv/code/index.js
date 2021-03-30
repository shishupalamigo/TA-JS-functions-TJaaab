// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(age, conversionRate = 7) {
  return ` Your dog's age is ${age * conversionRate} dog years`;
}

/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/

function calculateMoviesToWatch(age, numberOfMoviesPerWeek) {
  const MAX_AGE = 80;
  let moviesCanBeWached = ((MAX_AGE -age) * 12) * (numberOfMoviesPerWeek * 4);
  return `You can watch a maximum of ${moviesCanBeWached} movies for rest of your life `; 
}

/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(tempInCelcius) {
let tempInFahrenheit = (tempInCelcius * 9 / 5) + 32;
return `${tempInCelcius}°C is ${tempInFahrenheit} °F`;
}

/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function fahrenheitToCelsius(tempInFahrenheit) {
  let tempInCelcius = (tempInFahrenheit - 32) * 5 / 9 ;
  return `${tempInFahrenheit}°F is ${tempInCelcius}°C `;
  }

/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

function pow(n, x) {
  if (n > 0) {
    return n ** x;
  } else {
    return `The number below 1 is not allowed`;
  }
}

// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/

function sumOrProductOfN(n, operation) {
  if (operation === "sum") {
    return (n * (n + 1)) / 2;
  } else if (operation === "product") {
    let product = 1;
    for(var i = 1; i <= n; i++) {
      product *= i; 
    } return product;
  } else {
    alert(`Not a valid Input`);
  }
}

sumOrProductOfN(4, 'sum'); // 10
sumOrProductOfN(4, 'product'); // 24
sumOrProductOfN(4, 'hello'); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/

function sumOfN(n) {
  return (n * (n + 1)) / 2;
}

/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/

// Your code goes here

function sumOfN(n) {
  if (n % 5 === 0 ||  n % 7 === 0) {
    return (n * (n + 1)) / 2;
  } else {
    return `You haven't a multiple of 5 or 7 `;
  }
}

/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

function min(a,  b) {
  if (a < b) {
    return a;
  } else if (b < a ) {
    return b;
  } else if (a === b) {
    return `Both are equal`
  } else {
    return `Enter valid Input`
  }
}

min(0, 10);
min(0, -10);

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/

function typeCheck(val) {
  return typeof val;
}
