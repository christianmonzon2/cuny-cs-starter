// Week 1 Session 3: Array Methods Practice

// Challenge 1: Playlist Management
let playlist = ["Novacane", "She", "Dreams"];
console.log("Playlist:", playlist);

playlist.push("Dogtooth");
playlist.shift();
 
let index = playlist.indexOf("Novacane");
console.log("Index of Novacane:", index);

let isDogtoothInPlaylist = playlist.includes("Dogtooth");
console.log("Is 'Dogtooth' in playlist?", isDogtoothInPlaylist);

// Challenge 2: Search Feature
// TODO: Create an array of usernames
let users = ["alice123", "bob456", "charlie789", "david101"];

// TODO: Search for a username that contains "789"

let usersStartingWithA = users.filter(user => user.startsWith("a"));
console.log("Users starting with 'a':", usersStartingWithA);

let longUsernamesCount = users.filter(user => user.length > 7).length;
console.log("Count of usernames longer than 7 characters:", longUsernamesCount);

// Challenge 3: Data Processing
let numbers = [5, 12, 8, 21, 7, 14];

let numbersGreaterThan10 = numbers.filter(num => num > 10);
console.log("Numbers greater than 10:", numbersGreaterThan10);

 let numbersDoubled = numbers.map(num => num * 2);
console.log("Numbers doubled:", numbersDoubled);

let totalSum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Total sum of numbers:", totalSum);

playlist.sort();
console.log("Sorted playlist:", playlist);

// Find all users with numbers in their username
let usersWithNumbers = users.filter(user => /\d/.test(user));
console.log("Users with numbers in username:", usersWithNumbers);

 // Calculate the average of the numbers array
let average = totalSum / numbers.length;
console.log("Average of numbers array:", average)