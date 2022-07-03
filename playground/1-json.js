const fs = require("fs");

const data = fs.readFileSync("1-json.json");
// console.log(data);
const dataBuffer = data.toString();
// console.log(dataBuffer);
const dataObj = JSON.parse(dataBuffer);
// console.log(dataObj);
// console.log(dataObj.title);

dataObj.title = "Power of Habit";
dataObj.author = "rajeshkumar";

const userJson = JSON.stringify(dataObj);
fs.writeFileSync("1-json.json", userJson);
