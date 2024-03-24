// implimentation of node modules
// import names.js for name generation
const names = require("./names");
// import utills.js so that we can use sayHi func
const sayHi = require("./utils");
sayHi("rekha");
sayHi(names.john);
sayHi(names.peter);

// implementation complited

/* this file is executing without export */
/* when we import any module it actully invoked */
require("./about");
