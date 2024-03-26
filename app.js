// Built in modules in node

// 1. fs - file system module
// 2. path - to work with files and directories paths
// 3. http - for making requests to the web
// 4. url - to parse URLs
// 5. OS  - operating system specific functionality
// 6. crypto - for generating cryptographic hashes
// 7. readline - for reading input from a terminal

// importing fs module
const { readFileSync, writeFileSync } = require("fs");

const read = readFileSync("./about.js", "utf8");
console.log(read);
