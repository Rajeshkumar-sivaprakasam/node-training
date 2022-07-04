// task 1

// const fs = require("fs");
// const data = `   Hello Node js I am coming for you!  `;
// fs.appendFile("notes.txt", data, (err) => {
//   if (err) throw err;
//   console.log("The file is created if not existing!!");
// });

// task 2

const notes = require("./notes");

// console.log(getFunc());

// task 3 color printing

// const chalk = require("chalk");
// import chalk from "chalk";
// const validator = require("validator");

// console.log(chalk.green("Success!"));
// console.log(chalk.green.bold("Success!"));
// console.log(chalk.green.bold.inverse.underline("Success!"));
// console.log(validator.isEmail("ni@hsfc.com"));

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
  desc: "add",
  builder: {
    title: {
      describe: "Title of our page",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "body of our page",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});
// remove command
yargs.command({
  command: "remove",
  desc: "remove",
  builder: {
    title: {
      describe: "delete element",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.deleteNote(argv.title);
  },
});
//list command
yargs.command({
  command: "list",
  desc: "list of notes!",
  handler() {
    notes.listNotes();
  },
});
//delete command
yargs.command({
  command: "delete",
  desc: "start file/rpc server",
  handler() {
    console.log("Notes deleted!");
  },
});

// console.log(yargs.argv); // without this nothing gonna work
yargs.parse();
