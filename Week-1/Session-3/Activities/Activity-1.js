// Week 1 Session 3: Array Basics Practice

// Challenge 1: Shopping List
// TODO: Create an array with 3 grocery items
let shoppingList = ["Apples", "Bread", "Milk"];
// TODO: Add 2 more items to the end of the list
shoppingList.push("Eggs", "Cheese");
// TODO: Change the first item to something else
shoppingList[0] = "Bananas";
// TODO: Print the final shopping list
console.log("Final Shopping List:", shoppingList);


// Challenge 2: Grade Tracker
// TODO: Create an array of 5 test scores (numbers)
let testScores = [85, 90, 78, 92, 88];
// TODO: Calculate the average score
let totalScore = testScores.reduce((sum, score) => sum + score, 0);
let averageScore = totalScore / testScores.length;
console.log(`Average Score: ${averageScore.toFixed(2)}`);
// TODO: Add a new test score and recalculate average
testScores.push(95);
totalScore = testScores.reduce((sum, score) => sum + score, 0);
averageScore = totalScore / testScores.length;
console.log(`New Average Score after adding 95: ${averageScore.toFixed(2)}`);


// Challenge 3: Daily Tasks
// TODO: Create an array of tasks (strings)
let tasks = ["Complete homework", "Attend meeting", "Grocery shopping"];
// TODO: Remove the first task (mark as complete)
tasks.shift();
// TODO: Add a high-priority task to the beginning
tasks.unshift("Prepare for presentation");
// TODO: Count how many tasks remain
console.log(`Remaining tasks: ${tasks.length}`);


// BONUS CHALLENGES
// 1. Create a function to check if an item exists in the shopping list
// 2. Find the highest and lowest grades in the scores array
// 3. Create a function to move a task to a different position