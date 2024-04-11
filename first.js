// there is no concept of Window, because node.js is a server side applications and website-side
// but there are Globals -> accessible across all applications
// Some globals
// __dirname - gives the directory name
// __filename - gives the file name
// require - a function to use modules
// module - info abt current module
// **process** -info abt env where we are executing our program, imp for deployment; our database maybe on a different env than the curr pgm
console.log(__dirname);
console.log(process);
setInterval(() => {
  console.log("Hello!"), 1000;
}); // 1000ms -> 1s, stop -> ctrl+C
