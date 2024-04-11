//4. http in-built module
const http = require("http");
//createServer mehtod looks for a callback, mainly with 2 parameters

const server = http.createServer((req, res) => {
  // console.log(req); -> the req on itself is a giant object!, with many properties like url etc
  // url is what address the clinet is requesting
  // simple "/" represents the Home Page
  if (req.url === "/") {
    res.end("Welcome to Home");
  }
  if (req.url === "/about") {
    res.end("Here is history");
  }
  // ensure to end the response
  // if the user is requesting for a address not available, then we need to send a default response
  res.end("<h1>Webiste Not Available!</h1><a href='/'> Back Home");
});
// we also need to mention what port our server needs to listen to
server.listen(5000); // localhost:5000 -> open this on browswer, only then we would have exitted the exectution
