// Week 1 Session 5: JavaScript Data Manipulation Project
// Student Name: [Your Name]
// Project Theme: [Choose one: Grade System, Library Catalog, Fitness Tracker, Recipe Manager, Budget Tracker]

// 1. Data Structure
// TODO: Modify this structure based on your chosen theme
let libraryData = {
    projectName: "My Book Collection",
    records: [
        {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            genre: "Fiction",
            yearPublished: 1925,
            status: "read",
            rating: 5
        },
        {
            id: 2,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            genre: "Fiction",
            yearPublished: 1960,
            status: "read",
            rating: 4
        },
        {
            id: 3,
            title: "1984",
            author: "George Orwell",
            genre: "Dystopian",
            yearPublished: 1949,
            status: "read",
            rating: 5
        },
        {
            id: 4,
            title: "Brave New World",
            author: "Aldous Huxley",
            genre: "Dystopian",
            yearPublished: 1932,
            status: "read",
            rating: 4
        },
        {
            id: 5,
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            genre: "Fiction",
            yearPublished: 1951,
            status: "read",
            rating: 3
        },
        {
            id: 6,
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            genre: "Fantasy",
            yearPublished: 1937,
            status: "read",
            rating: 5
        }
    ],
    metadata: {
        totalRecords: 0,
        lastUpdated: new Date().toISOString()
    }


};

// 2. Core Functions

// Add a new record
function addRecord(record) {
    // TODO: Generate unique ID
    record.id = libraryData.records.length + 1;
    // TODO: Validate the record
    if (!validateRecord(record)) {
        console.error("Invalid record:", record);
        return;
    }
    // TODO: Add to projectData.records
    libraryData.records.push(record);
    // TODO: Update metadata
    libraryData.metadata.totalRecords = libraryData.records.length;
    libraryData.metadata.lastUpdated = new Date().toISOString();
    console.log("Record added:", record);
    return record;
}

// Remove a record by ID
function removeRecord(id) {
    // TODO: Find record by ID
    const index = libraryData.records.findIndex(r => r.id === id);
    if (index === -1) {
        console.error("Record not found with ID:", id);
        return;
    }
    // TODO: Remove from array
    const removedRecord = libraryData.records.splice(index, 1)[0];
    console.log("Record removed:", removedRecord);
    // TODO: Update metadata
    libraryData.metadata.totalRecords = libraryData.records.length;
    libraryData.metadata.lastUpdated = new Date().toISOString();
    return removedRecord;
}

// Update an existing record
function updateRecord(id, updates) {
    // TODO: Find record by ID
    const record = libraryData.records.find(r => r.id === id);
    if (!record) {
        console.error("Record not found with ID:", id);
        return;
    }
    // TODO: Apply updates
    Object.assign(record, updates);
    // TODO: Update metadata
    libraryData.metadata.lastUpdated = new Date().toISOString();
    console.log("Record updated:", record);
    return record;
}

// Search records based on criteria
function searchRecords(criteria) {
    // TODO: Filter records based on criteria
    let results = libraryData.records.filter(record => {
        return Object.keys(criteria).every(key => {
            if (key in record) {
                return record[key] === criteria[key];
            }
            return false;
        });
    });
    if (results.length === 0) {
        console.log("No records found matching criteria:", criteria);
        return [];
    }
    console.log("Search results:", results);
    return results;
}
    // TODO: Return matching records
function searchRecords(criteria) {
    let results = libraryData.records.filter(record => {
        return Object.keys(criteria).every(key => {
            if (key in record) {
                return record[key] === criteria[key];
            }
            return false;
        });
    });
    if (results.length === 0) {
        console.log("No records found matching criteria:", criteria);
        return [];
    }
    console.log("Search results:", results);
    return results;
}

// Calculate statistics or summary
function generateSummary() {
    // TODO: Calculate relevant statistics
    let totalBooks = libraryData.records.length;
    let totalRead = libraryData.records.filter(r => r.status === "read").length;
    let averageRating = totalBooks > 0 ?
        libraryData.records.reduce((sum, r) => sum + (r.rating || 0), 0) / totalBooks : 0;
    // TODO: Return summary object
    return {
        totalBooks,
        totalRead,
        averageRating: averageRating.toFixed(2),
        lastUpdated: libraryData.metadata.lastUpdated
    };
}

// 3. Data Processing Functions

// Parse JSON string to object
function loadData(jsonString) {
    // TODO: Try to parse JSON
    try {
        let data = JSON.parse(jsonString);
    // TODO: Handle errors
        if (data && data.projectName && Array.isArray(data.records)) {
            libraryData = data;
            libraryData.metadata.lastUpdated = new Date().toISOString();
            console.log("Data loaded successfully.");
        } else {
            console.error("Invalid data structure.");
        }
    } catch (error) {
        console.error("Error parsing JSON:", error);
    }
    // TODO: Validate data structure
    return libraryData;
}

// Convert object to JSON string
function saveData() {
    // TODO: Convert projectData to JSON
    if (!libraryData || !libraryData.records) {
        console.error("No data to save.");
        return null;
    }
    // TODO: Return formatted string
    try {
        let jsonString = JSON.stringify(libraryData, null, 2);
        console.log("Data saved successfully.");
        return jsonString;
    } catch (error) {
        console.error("Error converting to JSON:", error);
        return null;
    }
}

// Validate a record before adding/updating
function validateRecord(record) {
    // TODO: Check required fields
    if (!record || !record.title || !record.author || !record.yearPublished) {
        console.error("Record validation failed: Missing required fields.");
        return false;
    }
    // TODO: Validate data types
    if (typeof record.title !== 'string' || typeof record.author !== 'string' ||
        typeof record.yearPublished !== 'number' || typeof record.status !== 'string' ||
        (record.rating && typeof record.rating !== 'number')) {
        console.error("Record validation failed: Invalid data types.");
        return false;
    }
    // TODO: Return true/false with error message
    return true;
}

// 4. Display Functions

// Display all records
function displayRecords() {
    // TODO: Format and display records
    if (libraryData.records.length === 0) {
        console.log("No records available.");
        return;
    }
    console.log("=== Records ===");
    libraryData.records.forEach(record => {
        console.log(`ID: ${record.id}, Title: ${record.title}, Author: ${record.author}, Year: ${record.yearPublished}, Status: ${record.status}, Rating: ${record.rating || 'N/A'}`);
    });
    console.log(`Total Records: ${libraryData.metadata.totalRecords}`);
    console.log(`Last Updated: ${libraryData.metadata.lastUpdated}`);
    console.log("================");
    // TODO: Use console.log with clear formatting
    console.log("Records displayed successfully.");

}

// Display search results
function displaySearchResults(results) {
    // TODO: Format and display search results
    if (results.length === 0) {
        console.log("No search results found.");
        return;
    }
    console.log("=== Search Results ===");
    results.forEach(record => {
        console.log(`ID: ${record.id}, Title: ${record.title}, Author: ${record.author}, Year: ${record.yearPublished}, Status: ${record.status}, Rating: ${record.rating || 'N/A'}`);
    });
    console.log(`Total Results: ${results.length}`);
    console.log("======================");
    // TODO: Handle case where no results found
    console.log("Search results displayed successfully.");
}

// Display summary statistics
function displaySummary(summary) {
    // TODO: Format and display summary data
    if (!summary) {
        console.log("No summary data available.");
        return;
    }
    console.log("=== Summary ===");
    console.log(`Total Books: ${summary.totalBooks}`);
    console.log(`Total Read: ${summary.totalRead}`);
    console.log(`Average Rating: ${summary.averageRating}`);
    console.log(`Last Updated: ${summary.lastUpdated}`);
    console.log("================");
    // TODO: Make numbers readable (e.g., averages, totals)
    console.log("Summary displayed successfully.");
}

// 5. Main Program

function main() {
    console.log("=== [Your Project Name] ===\n");

    // Initialize with sample data
    console.log("Loading initial data...");

    // Test all functionality
    console.log("\nTesting core functions...\n");

    // Test 1: Display all records
    console.log("1. Displaying all records:");
    displayRecords();

    // Test 2: Add a new record
    console.log("\n2. Adding a new record:");
    let newRecord = {
        // Create a sample record based on your theme
    };
    addRecord(newRecord);
    displayRecords();

    // Test 3: Search for records
    console.log("\n3. Searching for records:");
    let searchResults = searchRecords({ status: "read" });
    displaySearchResults(searchResults);

    // Test 4: Update a record
    console.log("\n4. Updating a record:");
    updateRecord(1, { title: "The Great Gatsby (Updated)", author: "F. Scott Fitzgerald", yearPublished: 1925, status: "read", rating: 5 });
    displayRecords();

    // Test 5: Remove a record
    console.log("\n5. Removing a record:");
    removeRecord(1);
    displayRecords();

    // Test 6: Generate summary
    console.log("\n6. Generating summary:");
    let summary = generateSummary();
    displaySummary(summary);
}

// Start the program
main();

// 6. Test Cases
// TODO: Create at least 5 test cases demonstrating your functions work correctly
function runTests() {
    console.log("\n=== Running Tests ===");

    // Test 1: Add record
    console.log("=== Test 1: Adding a record ===");
    let testRecord = {
        title: "1984",
    }

    // Test 2: Remove record
    console.log("=== Test 2: Removing a record ===");
    removeRecord(1);

    // Test 3: Update record
    console.log("=== Test 3: Updating a record ===");
    updateRecord(1, { title: "Brave New World", author: "Aldous Huxley", yearPublished: 1932, status: "read", rating: 4 });

    // Test 4: Search records
    console.log("=== Test 4: Searching records ===");
    let searchResults = searchRecords({ status: "read" });
    displaySearchResults(searchResults);

    // Test 5: Generate summary
    console.log("=== Test 5: Generating summary ===");
    let summary = generateSummary();
    displaySummary(summary);


    console.log("=== Tests Complete ===\n");
}

runTests();