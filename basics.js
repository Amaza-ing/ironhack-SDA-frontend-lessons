console.log("Hello everyone!");


// JAVASCRIPT BASICS VARIABLES / DATA TYPES

let myVar = 10;
console.log("myVar: ", myVar, typeof myVar);

let myStr = "Hello!";
console.log("myStr:", myStr, typeof myStr);
console.log(myStr.length, myStr[0], myStr.charAt(0));

let name = 'Adrián';
console.log("name:", name);

let info = `this is some info: ${name}`;
console.log(info);

const myNum = 50;

let myBoolean = true;
console.log(myBoolean, typeof myBoolean);

let myUndefined;
console.log(myUndefined);

let myNull = null;
console.log(myNull);


// CONDITIONAL STATEMENTS

let age = 20;
console.log(`is ${age} greater than 18: `, age > 18);

if (age > 18) {
  console.log("You are an adult");
} else {
  console.log("you are very young");
}

let academy = "Ironhack";

if (academy) {
  console.log("The academy exists!");
}

let condition = 99

if (condition) {
  console.log("The variable is truthy");
} else {
  console.log("The variable is falsy");
}

if ("99" === 99) console.log("It's truthy!");
else console.log("It's falsy");


const campus = "sao ";
console.log(campus.length);
 
switch (campus.length) {
  case 5:
    console.log("This might be Miami or Paris");
    break;
  case 6:
    console.log("This is Berlin or Lisbon or Madrid");
    break;
  case 9:
    console.log("This is Amsterdam or Barcelona or Sao Paulo");
    break;
  case 11:
    console.log("This is Mexico City");
    break;
  default:
    console.log("Is there a new Ironhack campus opening? ");
    break;
}


// ARRAYS

const countries = ["Saudi Arabia", "Spain", "Japan"];
console.log("Countries: ", countries);
countries.push("Germany");
console.log("Countries:", countries);
countries.pop();
console.log("Countries:", countries);
countries.unshift("Italy");
console.log("Countries:", countries);
countries.shift();
console.log("Countries:", countries);

// this is not the proper way to create a copy, because if we modify the new array we will modify the original one
// const newCountries = countries;
// console.log("New countries:", newCountries);
// newCountries.pop();
// console.log("Countries:", countries);

console.log(...countries);
const countriesCopy = [...countries];
console.log(countriesCopy);
countriesCopy.pop();
console.log(countriesCopy);
console.log("Original countries", countries);


// LOOPS

let counter = 0;

while(counter < 10) {
  console.log(counter);
  counter++;
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let country of countries) {
  console.log(country);
}

countries.forEach((country) => {
  console.log(country);
})


// OBJECTS

const car = {
  model: "sedan",
  color: "White",
  year: 2002
};

console.log(car);
console.log(car.model);

