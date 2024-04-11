// os, path, fs, http-> set up http server
//1. os module
const opSys = require("os");
// console.log(opSys.EOL);
const user = opSys.userInfo(); // info abt curr user
// console.log(user);
// console.log(opSys.uptime());

// const currentOS = {
//   name: opSys.type(),
//   release: opSys.release(),
//   totalMem: opSys.totalmem(),
//   freeMem: opSys.freemem(),
// };

// console.log(currentOS);

//2. path
const path = require("path"); // basically says -> import path as path

console.log(path.sep); // this returns the os-specific path separator
const filePath = path.join("subfolder");
const baseName = path.basename(filePath);
console.log(baseName, path.dirname(filePath));

// to return absolute path, use path.resolve(__dirname)
const absPath = path.resolve(__dirname, "subfolder");
console.log(absPath);

//3. Fs module
// there are 2 flavors -> asynchronous/non-blockincg and synchornous/blocking
// Sync Fs module
const { readFileSync, writeFileSync, read } = require("fs"); // this is the destrucured format,
// read and write from file system
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first, second); // this logs out the content in the resp text files

writeFileSync("./content/result-sync.txt", "This is the result of write-sync."); // we over-write into result-sync.txt
writeFileSync("./content/result-sync.txt", "Extra points", { flag: "a" }); // in order to add to the existing content in the file
// note that there is NO new-line by default

//Async Fs module
//this is used when we want to utilize callback-style of file creation, like when we press a button etc
// we want it to do something whenever the click is made and not every time this file is run
const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  // set up the logic/functionality inside the callback portion
});
// the second part of the arguments above is the callback function
// and just this part gives us an encoding, therefore add the 'utf8' part
