const express = require("express");

const app = express();

app.get("", (req, res) => {
	console.log("Hello Express!");
	res.send("Hello Express!");
});

//about
app.get("/about", (req, res) => {
	console.log("You are in about page!");
	res.send("You are in about page!");
});

app.listen(3000, () => {
	console.log("You server is running on 3000");
});
