// Week 1 Session 3: Object Creation Practice

// Challenge 1: Contact Card
// TODO: Create an object representing a contact
// Include: name, phone, email, address
let contact = {
    name: "Christian Monzon",
    phone: "123-456-7890",
    email: "fakeemail123@email.com"
};

// TODO: Access and print the contact's name
console.log(contact.name);

// TODO: Update the contact's phone number
contact.phone = "987-654-3210";

// TODO: Add a new property for birthday
contact.birthday = "09/16/2006";


// Challenge 2: Product Catalog
// TODO: Create an object for a product
// Include: name, price, inStock, category
let product = {
    pname: "Banana",
    price: 3.99,
    inStock: true,
    category: "Fruits"
};

// TODO: Create a method to apply a discount
product.applyDiscount = function(discount) {
    this.price -= discount;
};

// TODO: Create a method to check if in stock
product.isInStock = function() {
    return this.inStock ? "In stock" : "Out of stock";
};


// Challenge 3: Game Character
// TODO: Create a game character object
// Include: name, health, level, inventory (array)
let character = {
    name: "Miki",
    health: 100,
    level: 67,
    inventory: [
        { item: "fish", quantity: 1 },
        { item: "toy", quantity: 1 },
        { item: "treat", quantity: 5 }
    ]
};

// TODO: Create a method to add item to inventory
character.addItem = function(item, quantity) {
    this.inventory.push({ item: item, quantity: quantity });
};

// TODO: Create a method to take damage
character.takeDamage = function(amount) {
    this.health -= amount;
    if (this.health < 0) this.health = 0; // Prevent negative health
};

// TODO: Create a method to level up
character.levelUp = function() {
    this.level += 1;
    this.health = 100; // Reset health on level up
};


// BONUS CHALLENGES
// 1. Create a method to display all contact info formatted nicely
// 2. Create a function to compare two products by price
// 3. Create a battle method that compares two characters