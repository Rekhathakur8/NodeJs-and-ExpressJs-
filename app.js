// Built in modules in node

// 1. fs - file system module
// 2. path - to work with files and directories paths
// 3. http - for making requests to the web
// 4. url - to parse URLs
// 5. OS  - operating system specific functionality
// 6. crypto - for generating cryptographic hashes
// 7. readline - for reading input from a terminal

// importing a built in module OS

const os = require("os");

// info about current user

const user = os.userInfo();

// method returns the system uptime in seconds

console.log(`the system uptime is ${os.uptime()}`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs);
