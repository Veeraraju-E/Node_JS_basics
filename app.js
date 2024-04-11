// node uses CommonJS framwork
// modules are encapsulated code
// every file in node is a module
const names = require("./names"); // the parameter for require is the location from where we are getting the data
const sayHi = require("./utils");

// returns a const, name is sayHi, takes parameter 'name'
// invoke
// sayHi("Veeraraju");
// access peter using `require`
// sayHi(names.peter, names.john);
// console.log(names);
require("./functions_intro"); // there is an output!, even without exporting the function; cuz when we
// import a module, we also invoke it
