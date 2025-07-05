// Weekly reading log
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

// Adds a new reading entry to the log
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes }; // Create new entry object
  readingLog.push(newEntry); // Add new entry to reading log
}

// Returns total minutes spent reading all week
function totalReadingMinutes(log) {
  let total = 0; // Declare and set total minutes to zero
  for (let entry of log) { // Loop through each entry
    total += entry.minutes; // Sum up all minutes
  }
  return total; // Return the total minutes
}

// Returns the book read most frequently
function mostReadBook(log) {
  const bookCounts = {}; // Object to store book counts
  for (let entry of log) { // Loop through each entry
    if (!bookCounts[entry.book]) { // If book has not already been counted
      bookCounts[entry.book] = 1; // Set count to 1
    } else {
      bookCounts[entry.book]++; // Otherwise increase count by one
    }
  }

  let maxBook = null; // Var for storing the most read book
  let maxCount = 0; // Var for storing the max count
  for (let book in bookCounts) { // Loop through the counted books
    if (bookCounts[book] > maxCount) { // Check if current book has a higher count
      maxBook = book; // Update the most read book
      maxCount = bookCounts[book]; // Update max count
    }
  }
  return maxBook; // Return the most read book
}

// Prints a summary of minutes read per day
function printDailySummary(log) {
  for (let entry of log) { // Loop through each entry
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`); // Print summary for each weekday
  }
}

// Example usage
addReadBook("Saturday", "Dune", 50);
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));

// Test Case


// Suggested Improvement
