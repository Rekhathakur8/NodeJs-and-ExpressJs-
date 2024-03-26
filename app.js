// Built in modules in node

// 1. fs - file system module
// 2. path - to work with files and directories paths
// 3. http - for making requests to the web
// 4. url - to parse URLs
// 5. OS  - operating system specific functionality
// 6. crypto - for generating cryptographic hashes
// 7. readline - for reading input from a terminal

// import http built in module

const http = require("http");
// The http.createServer() method turns your computer into an HTTP server

//The http.createServer() method creates an HTTP Server object.

//The HTTP Server object can listen to ports on your computer and execute a function, a requestListener, each time a request is made.

// createServer method takes a callback function
// callback function has two parameters req and res
const server = http.createServer((req, res) => {
  // req:incoming request
  // res:outgoint response
  res.write("Welcome to our home page");
  res.end();
});

server.listen(3000);
