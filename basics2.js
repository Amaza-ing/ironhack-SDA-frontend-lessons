console.log("Basics 2!");


// FUNCTION STATEMENT

function sayMyName() {
  console.log("My name is Adrián");
}
sayMyName();


// FUNCTION EXPRESSION

const sayMyCountry = function () {
  console.log("My country is Spain");
}
sayMyCountry();


// ARROW FUNCTIONS

const sayHello = () => {
  console.log("Hello!");
}
sayHello();

const sum = (n1, n2) => {
  return n1 + n2;
}
const result = sum(10, 20);
console.log(result);

const multiply = (n1, n2) => n1 * n2;
console.log(multiply(3, 5));

const calculateLength = str => str.length;
console.log(calculateLength("potato"));


// CALLBACKS

function doSomething(callback) {
  callback();
}

const sayHi = function() {
  console.log("HI!");
}

const sayHo = function() {
  console.log("HO!");
}

doSomething(sayHi);
doSomething(sayHo);


function doStuff(str, cb) {
  console.log(str);
  console.log(cb);
  cb();
}

const myStr = "asdfasdf";

doStuff(myStr, sayHi);

doStuff("jgjhg", () => {
  console.log("This is a callback");
})


// ARRAY METHODS

const numbers = [10, 20, 30, 40];
const colors = ["white", "black", "blue"];
const fruits = [
  {
    fruit: "orange",
    calories: 20,
    healthy: true
  },
  {
    fruit: "strawberry",
    calories: 5,
    healthy: false
  },
  {
    fruit: "banana",
    calories: 50,
    healthy: true
  }
]


  // forEach()

numbers.forEach((number) => {
  console.log(number);
})


  // map()

const doubleNumbers = numbers.map((number) => {
  return number * 2;
})
console.log(doubleNumbers);

const numbersCopy = numbers.map((number) => number);
console.log(numbersCopy);

const uppercaseColors = colors.map((color) => {
  return color.toUpperCase();
})
console.log(uppercaseColors);

const lengthArr = colors.map((color) => color.length)
console.log(lengthArr);


  // filter()

const filteredNumbers = numbers.filter((number) => {
  return number > 25;
})
console.log(filteredNumbers);

const healthyFruits = fruits.filter((fruit) => {
  return fruit.healthy;
})
console.log(healthyFruits);

const highCaloriesFruits = fruits.filter((fruit) => {
  return fruit.calories > 30;
})
console.log(highCaloriesFruits);


  // reduce()

// const numbers = [10, 20, 30, 40];
// const colors = ["white", "black", "blue"];

const sumResult = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0)
console.log("sum result: ", sumResult);

const multiplicationResult = numbers.reduce((acc, curr) => {
 return acc * curr;
}, 1)
console.log(multiplicationResult);

const concatStr = colors.reduce((acc, curr) => {
  return acc + " " + curr;
}, "")
console.log(concatStr);

const lengthSum = colors.reduce((acc, curr) => {
  return acc + curr.length;
}, 0)
console.log(lengthSum);


  // sort()

const nums = [1, 100, 2, 34, 21]

nums.sort((a, b) => {
  return b - a;
});

console.log(nums);

colors.sort((a, b) => {
  return a.length - b.length;
})
console.log(colors);

fruits.sort((a, b) => {
  return b.calories - a.calories;
})
console.log(fruits);


  // reverse()

console.log(colors);
colors.reverse();
console.log(colors);