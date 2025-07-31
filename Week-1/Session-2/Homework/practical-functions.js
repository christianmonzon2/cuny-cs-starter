//Part 2: Practical Functions​

//Create a file called practical-functions.js that includes a function to:​
//1. Format a phone number (e.g., “1234567890” into “(123) 456-7890”)​
function formatPhoneNumber(number) {
    let cleaned = ('' + number).replace(/\D/g, '');
    if (cleaned.length !== 10) {
        return "Invalid phone number";
    }
    let area = cleaned.slice(0, 3);
    let prefix = cleaned.slice(3, 6);
    let line = cleaned.slice(6);
    return `(${area}) ${prefix}-${line}`;
}
console.log(formatPhoneNumber("1234567890"));
//2. Validate an email address format​
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

//3. Calculate age from birth year​
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}