// task 1

// const fs = require("fs");
// const data = `   Hello Node js I am coming for you!  `;
// fs.appendFile("notes.txt", data, (err) => {
//   if (err) throw err;
//   console.log("The file is created if not existing!!");
// });

// task 2

// const getFunc = require("./notes");

// console.log(getFunc());

// task 3 color printing

// const chalk = require("chalk");
import chalk from "chalk";
import validator from "validator";

console.log(chalk.green("Success!"));
console.log(chalk.green.bold("Success!"));
console.log(chalk.green.bold.inverse.underline("Success!"));
console.log(validator.isEmail("ni@hsfc.com"));
