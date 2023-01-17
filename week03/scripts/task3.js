/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

// Step 9: Test all of the mathematical functionality of the task3.html page.
const buttonAddNumbers = document.getElementById("addNumbers");

function add(number1, number2) {
    return parseInt(number1) + parseInt(number2);
}

function addNumbers() {
    const num1 = document.getElementById("addend1").value;
    const num2 = document.getElementById("addend2").value;
    const sum = document.getElementById("sum");
    sum.value = add(num1, num2);
}

buttonAddNumbers.addEventListener("click", addNumbers);

const buttonSubtractNumbers = document.getElementById("subtractNumbers");

const subtract = function (number1, number2) {
    return parseInt(number1) - parseInt(number2);
}

const subtractNumbers = function () {
    const num1 = document.getElementById("minuend").value;
    const num2 = document.getElementById("subtrahend").value;
    const dif = document.getElementById("difference");
    dif.value = subtract(num1, num2);
}

buttonSubtractNumbers.addEventListener("click", subtractNumbers);

const buttonMultiplyNumbers = document.getElementById("multiplyNumbers");

const multiply = (number1, number2) => parseInt(number1) * parseInt(number2);

const multiplyNumbers = () => {
    const num1 = document.getElementById("factor1").value;
    const num2 = document.getElementById("factor2").value;
    const prod = document.getElementById("product");
    prod.value = multiply(num1, num2);
}

buttonMultiplyNumbers.addEventListener("click", multiplyNumbers);

const buttonDivideNumbers = document.getElementById("divideNumbers");

function divide(number1, number2) {
    return parseInt(number1) / parseInt(number2);
}

function divideNumbers() {
    const num1 = document.getElementById("dividend").value;
    const num2 = document.getElementById("divisor").value;
    const quotient = document.getElementById("quotient");
    quotient.value = divide(num1, num2);
}

buttonDivideNumbers.addEventListener("click", divideNumbers);

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date

// Step 2: Declare a variable to hold the current year

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

// Step 4: Assign the current year variable to an HTML form element with an ID of year

const date = new Date();

const currentYear = date.getFullYear();

document.getElementById("year").innerHTML = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

document.getElementById("array").innerHTML = array;

const odds = array.filter(function (odd) {
    return odd % 2;
});

document.getElementById("odds").innerHTML = odds;

const evens = array.filter(function (even) {
    return even % 2 === 0;
});

document.getElementById("evens").innerHTML = evens;

const reducedArray = array.reduce((total, item) => total + item);

document.getElementById("sumOfArray").innerHTML = reducedArray;

const timesTwo = array.map(value => value * 2);

document.getElementById("multiplied").innerHTML = timesTwo;

const sumMultiplied = timesTwo.reduce((total, item) => total + item);

document.getElementById("sumOfMultiplied").innerHTML = sumMultiplied;