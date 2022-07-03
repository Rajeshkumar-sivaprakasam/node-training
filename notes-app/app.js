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
// import chalk from "chalk";
const validator = require("validator");

// console.log(chalk.green("Success!"));
// console.log(chalk.green.bold("Success!"));
// console.log(chalk.green.bold.inverse.underline("Success!"));
console.log(validator.isEmail("ni@hsfc.com"));

// cmd line args
// const cmd = process.argv[2];
// if (cmd == "add") {
//   console.log("Adding Notes!");
// } else if (cmd == "remove") {
//   console.log("Removing Notes!");
// }

// import yargs from "yargs";
const yargs = require("yargs");
// add command
yargs.command({
  command: "add",
  desc: "start file/rpc server",
  handler: function () {
    console.log("notes added!");
  },
});
// remove command
yargs.command({
  command: "remove",
  desc: "start file/rpc server",
  handler: function () {
    console.log("notes removed!");
  },
});
//list command
yargs.command({
  command: "list",
  desc: "start file/rpc server",
  handler: function () {
    console.log("list of notes added!");
  },
});
//delete command
yargs.command({
  command: "delete",
  desc: "start file/rpc server",
  handler: function () {
    console.log("Notes deleted!");
  },
});

console.log(yargs.argv); // without this nothing gonna work
