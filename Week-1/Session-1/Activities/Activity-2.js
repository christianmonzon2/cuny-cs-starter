// Week 1 Session 1: Variables and Data Types Practice
// Run this file using Code Runner (right-click > Run Code or Ctrl+Alt+N)

// Task 1: Create variables for different data types
// TODO: Create a string variable for your name
let myName = "Christian";

// TODO: Create a number variable for your age
let age = 18;

// TODO: Create a boolean variable for whether you're a student
let isStudent = true;

// Task 2: Print variables to console
// TODO: Use console.log() to display each variable
console.log(myName);
console.log(age);
console.log(isStudent);

// Task 3: Experiment with typeof operator
// TODO: Check the type of each variable using typeof
console.log("The type of variable myName is a " + typeof myName);
console.log("The type of variable age is a " + typeof age);
console.log("The type of variable isStudent is a " + typeof isStudent);

// BONUS CHALLENGES
// 1. Create a variable that holds your favorite quote
let favoriteQuote = "Hello World";
console.log(favoriteQuote);
// 2. Create a variable that calculates days until the weekend
let curDate = new Date();
let curDay=curDate.getDay();

if(curDay === 0) {
    console.log("There are 0 days until the weekend");
}
else{
    console.log("will update");
}


let daysUntilWeekend = 6-curDay;
console.log(`Days until weekend: ${daysUntilWeekend}`);
// 3. Create a variable that checks if today is a weekday
let curday = new Date().getDay();
if(curDay<=5){
    if (curDay===0) console.log("It is Sunday and not a weekday")
    else console.log("Today is a weekday");
} 
else {
    console.log("It is Saturday and not a weekday");
}