const alter = require("./alter.js");
const chalk = require("chalk");
alter(7, 9);
alter(5, 8);
alter(4, 7);
let name = "Christian";
let nameChalk = chalk.red(name);
console.log(nameChalk);
