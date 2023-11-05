// setTimeout(() => {
//   console.log("This is inside the setTimeout");
// }, 2000);

// let i = 0;
// const intervalId = setInterval(() => {
//   console.log(i++);
// }, 1000)

// console.log("Interval ID:", intervalId);
// setTimeout(() => {
//   clearInterval(intervalId)  
// }, 3000);


// CALLBACKS  

// const f1 = function() {
//   console.log("I'm function 1");
// }

// const f2 = function() {
//   console.log("I'm function 2");
// }

// function doSomething(cb) {
//   console.log("do something:");
//   cb();
// }

// doSomething(f2);




const directions = [
  "Starting point: Ironhack Miami",
  "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
  "➔ Turn right onto S Miami Ave",
  "* Chipotle Mexican Grill 891 S Miami Ave, Miami",
];



function getDirections(step, cb, errorcb) {
  setTimeout(() => {
    console.log(directions[step]);
  
    if (!directions[step]) errorcb("Instructions not found!");
    else cb();    
  }, 1000);
}


// getDirections(0, () => {
//   getDirections(1, () => {
//     getDirections(2, () => {
//       getDirections(3, () => {
//         console.log("You have reached your destination");
//       }, (err) => console.log(err))
//     }, (err) => console.log(err))
//   }, (err) => console.log(err))
// }, (err) => console.log(err))


// PROMISES

function obtainDirections(step) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(directions[step]);
  
      if (!directions[step]) reject("Instructions not found")
      else resolve();      
    }, 1000);
  })
}

// obtainDirections(0)
//   .then(() => obtainDirections(1))
//   .then(() => obtainDirections(2))
//   .then(() => obtainDirections(3))
//   .then(() => console.log("You have reached your destination"))
//   .catch((err) => console.log(err))


async function getCoffee() {
  try {
    await obtainDirections(0);
    await obtainDirections(1);
    await obtainDirections(2);
    await obtainDirections(3);
    console.log("You have reached your destination");
  } catch(e) {
    console.log(e);
  }
}

getCoffee();
