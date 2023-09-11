const request = require('request');
const fs = require('fs');

// Define a mapping of URLs to file names
const urlToFileMapping = {
  'http://localhost:5050/route_0': 'small_text.txt',
  'http://localhost:5050/route_1': 'big_text.txt',
  'http://localhost:5050/route_2': 'empty_text.txt',
};

// Check if the URL argument is provided
if (process.argv.length < 3) {
  console.error('Usage: node fetch_and_save.js <URL>');
  process.exit(1);
}

// Get the URL from the command line argument
const url = process.argv[2];

// Check if the URL is in the mapping
if (!urlToFileMapping.hasOwnProperty(url)) {
  console.error('URL not found in mapping');
  process.exit(1);
}

// Get the corresponding file name
const fileName = urlToFileMapping[url];

// Send a GET request to the specified URL
request.get(url, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`Error: Failed to fetch data. Status code: ${response.statusCode}`);
    process.exit(1);
  }

  // Write the response body to the specified file path with UTF-8 encoding
  fs.writeFile(fileName, body, 'utf-8', (writeError) => {
    if (writeError) {
      console.error(`Error writing to file: ${writeError.message}`);
      process.exit(1);
    }
    console.log(`Data saved to ${fileName}`);
  });
});