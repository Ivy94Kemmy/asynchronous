// Synchronous means doing one thing at a time // Asynchronous means doing many at once
// Browser Environment is the runtime environment where javascript excutes, managing tasks like DOM updates and handling user interactions.//
console.log("1. Order taken");

setTimeout(function() {
    console.log("3. Food is ready!");
}, 2000);

console.log("2. Waiter serves another table");

//Web API is predefined interfaces provided by the browser to perform specific tasks like HTTP requests, event handling, or animations.//
//Event loop is the system that manages the execution of synchronous and asynchronous code.//
//Fetch API is a modern tool for making HTTP requests.//
//Promise is a javascript object representing the eventual result of an asynchronous operation.//

console.log("A");
setTimeout(() => console.log("B"), 1000)
setTimeout(() => console.log("C"), 0)
console.log("D");

console.log("Start");
setTimeout(() => console.log("Timer 1"), 500);
setTimeout(() => console.log("Timer 2"), 100);
console.log("End");

//The timer with the shorter wait finishes first no matter which was written first.//

// part 2 timers//
setTimeout(function() {
    console.log("Happy birthday!");
}, 3000);

//setInterval means do something again and again//
let count = 0;
const timer = setInterval(function () {
    count = count + 1;
    console.log("Tick" + count);

    if (count === 3) {
        clearInterval(timer); // stop the clock
        console.log("Done!");
    }
}, 1000);

// part 4 promises
const cookiePromise = new Promise(function (resolve, reject){
    const gotCookie = true;
    setTimeout(function () {
        if (gotCookie) {
            resolve("Here is yur cookie!");
        } else {
            reject("Sorry, I dropped it.");
        }
    }, 2000);
});

//resolve(value) means “it worked, here’s the result.”
//reject(reason) means “it failed, here’s why.”
