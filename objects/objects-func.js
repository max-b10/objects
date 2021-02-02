const myBook = {
  title: "1984",
  author: "George Orwell",
  pages: 500,
};

const otherBook = {
  title: "A people's history",
  author: "Howard Zinn",
  pages: 400,
};

// Passing an object into a function:

// let getSummary = function (book) {
//   console.log(
//     `'${book.title}' was written by: ${book.author} and has ${book.pages} pages.`
//   );
// };

// getSummary(myBook);
// getSummary(otherBook);

// Return an object from a function:
let getSummary = function (book) {
  return {
    summary: `'${book.title}' was written by: ${book.author}`,
    pageSummary: `'${book.title}' has ${book.pages} pages.`,
  };
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageSummary);
console.log(otherBookSummary.summary);

// Challenge: create a function which returns an object.
// Take farenheit in and return an object with f, c and k temps.

let allTemps = function (fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    celsius: (fahrenheit - 32) * (5 / 9),
    kelvin: (fahrenheit + 459.67) * (5 / 9),
  };
};
let weather = allTemps(5);
console.log(weather);
