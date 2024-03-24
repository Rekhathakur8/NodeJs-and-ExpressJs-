// Globals variable - are the one which accesible anywhere in program

// as we know there is no window is present in node

// some of global variables are

// _dirnmae - path t current directory
// _filename - function to use modules
// require - function to use modules
// process - infor about env where the program is being executed

const my = setInterval(() => {
  console.log("Hello World");
}, 1000);

clearInterval(my);
