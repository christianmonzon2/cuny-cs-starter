// Week 1 Session 2: Conditional Logic Practice

// Challenge 1: Grade Calculator
// TODO: Determine letter grade based on percentage
// A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60
let score = 85;
// Your code here
if (score >= 90) {
    console.log("A");
}
else if (score >= 80) {
    console.log("B");
}
else if (score >= 70) {
    console.log("C");
}
else if (score >= 60) {
    console.log("D");
}
else {
    console.log("F");
}   


// Challenge 2: Movie Ticket Pricing
// TODO: Calculate ticket price based on age and time
// Child (under 12): $8
// Adult (12-64): $12
// Senior (65+): $10
// Matinee discount (before 5pm): $2 off
let age = 30;
let isMatinee = true; // true if before 5pm
// Your code here
console.log(isMatinee);
if (age < 12) {
    console.log("Ticket price: $8");
}
else if (age >= 12 && age < 65) {
    console.log("Ticket price: $12");
    if (isMatinee) {
        console.log("Matinee discount applied: $10");
    }
    else {
        console.log("No discount, price remains $12");
    }
}
else if (age >= 65) {
    console.log("Ticket price: $10");
    if (isMatinee) {
        console.log("Matinee discount applied: $8");
    }
    else {
        console.log("No discount, price remains $10");
    }
}


// Challenge 3: Weather Advisor
// TODO: Suggest activity based on temperature and conditions
// Hot (above 85): "Go swimming"
// Pleasant (60-85): "Go for a walk"  
// Cold (below 60): "Stay inside and watch a movie"
// If raining, always suggest "Stay inside" regardless of temperature
let temperature = 72;
let isRaining = false;
// Your code here
console.log(temperature)
if (isRaining) {
    console.log("Stay inside");
}
else if (temperature > 85) {
    console.log("Go swimming");
}
else if (temperature >= 60 && temperature <= 85) {
    console.log("Go for a walk");
}
else {
    console.log("Stay inside and watch a movie");
}


// BONUS CHALLENGES
// 1. Create a simple game outcome decider (rock, paper, scissors)
let player1 = "rock";      // Change to "rock", "paper", or "scissors"
let player2 = "scissors";  // Change to "rock", "paper", or "scissors"

if (player1 === player2) {
    console.log("It's a tie!");
} else if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "rock")
) {
    console.log("Player 1 wins!");
} else if (
    (player2 === "rock" && player1 === "scissors") ||
    (player2 === "scissors" && player1 === "paper") ||
    (player2 === "paper" && player1 === "rock")
) {
    console.log("Player 2 wins!");
}
else {
    console.log("Invalid input");
}
// 2. Design a shipping cost calculator based on weight and destination
let weight = 10; // in pounds
let destination = "international"; // "domestic" or "international"
let shippingCost;
if (destination === "domestic") {
    if (weight <= 5) {
        shippingCost = 5; // $5 for up to 5 pounds
    }
    else if (weight <= 10) {
        shippingCost = 10; // $10 for 6-10 pounds
    }
    else {
        shippingCost = 15; // $15 for over 10 pounds
    }
} else if (destination === "international") {
    if (weight <= 5) {
        shippingCost = 15; // $15 for up to 5 pounds
    }
    else if (weight <= 10) {
        shippingCost = 25; // $25 for 6-10 pounds
    }
    else {
        shippingCost = 35; // $35 for over 10 pounds
    }
} else {
    console.log("Invalid destination");
}
console.log(`Shipping cost: $${shippingCost}`);
// 3. Build a password strength checker with multiple criteria
let password = "P@ssw0rd123"; // Change to test different passwords
let isStrong = true;
if (password.length < 8) {
    isStrong = false;
    console.log("Password is too short");
}
if (!/[A-Z]/.test(password)) {
    isStrong = false;
    console.log("Password must contain at least one uppercase letter");
}
if (!/[a-z]/.test(password)) {
    isStrong = false;
    console.log("Password must contain at least one lowercase letter");
}
if (!/[0-9]/.test(password)) {
    isStrong = false;
    console.log("Password must contain at least one number");
}
if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    isStrong = false;
    console.log("Password must contain at least one special character");
}
if (isStrong) {
    console.log("Password is strong");
}
else {
    console.log("Password is weak");
}
