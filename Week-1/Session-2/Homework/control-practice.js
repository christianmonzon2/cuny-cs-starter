//Week 1 Session 2 Homework

//Part 1: Control Structure Practice​

//Create a file called control-practice.js that includes a:​
​
//1. Shopping discount calculator (if/else based on purchase amount)​
function shoppingDiscountCalculator(purchaseAmount) {
    let discount;
    if (purchaseAmount >= 100) {
        discount = 0.2; // 20% discount
    } else if (purchaseAmount >= 50) {
        discount = 0.1; // 10% discount
    } else {
        discount = 0; // No discount
    }
    const finalAmount = purchaseAmount * (1 - discount);
    return `Final amount after discount: $${finalAmount.toFixed(2)}`;
}
//2. Simple menu system that repeats until user chooses exit​
function simpleMenu() {
    const menuOptions = [
        "1. View items",
        "2. Add item to cart",
        "3. Checkout",
        "4. Exit"
    ];
    let choice;
    do {
        console.log("Menu Options:");
        menuOptions.forEach(option => console.log(option));
        choice = prompt("Please enter your choice (1-4): ");
        
        switch (choice) {
            case '1':
                console.log("Viewing items...");
                break;
            case '2':
                console.log("Adding item to cart...");
                break;
            case '3':
                console.log("Checking out...");
                break;
            case '4':
                console.log("Exiting the menu.");
                break;
            default:
                console.log("Invalid choice, please try again.");
        }
    } while (choice !== '4');
}
//3. Game score evaluator that gives feedback based on points
function gameScoreEvaluator(points) {
    if (points >= 90) {
        return "Excellent job!";
    } else if (points >= 75) {
        return "Good job!";
    } else if (points >= 50) {
        return "You can do better!";
    } else {
        return "Keep trying!";
    }
}