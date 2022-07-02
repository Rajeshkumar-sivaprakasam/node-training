const fs = require("fs");
const data = `   Hello Node js I am coming for you!  `;
fs.appendFile("notes.txt", data, (err) => {
  if (err) throw err;
  console.log("The file is created if not existing!!");
});
