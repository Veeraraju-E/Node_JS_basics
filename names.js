const john = "John"; // want to share -> use module.exports
const peter = "Peter";
const secret = "SUPER SECRET"; // local

module.exports = { john, peter }; // export object
console.log(module);

const person = { name: "Bob" };
// alternate ways to export
module.exports.items = ["item1", "item2"];
module.exports.singlePerson = person;
