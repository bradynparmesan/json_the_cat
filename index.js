// index.js - file to execute breedFetcher function using input from command line
const breedFetcher = require("./breedFetcher");
const breedName = process.argv[2]; // takes input from user through command line

breedFetcher(breedName, (error, breedDescription) => {
  if (error) {
    console.log("Error details: ", error); // prints error message with details
  } else {
    console.log(breedDescription); // prints description of the breed input by user
  }
});