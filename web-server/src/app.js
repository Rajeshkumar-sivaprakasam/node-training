const express = require("express");

const app = express();

app.get("", (req, res) => {
	res.send("Hello Express!");
});

//about
app.get("/about", (req, res) => {
	res.send("<h1>About Page!</h1>");
});

//weather
app.get("/weather", (req, res) => {
	res.send({
		forcast: "cool",
		location: {
			longitude: 20.89,
			latitude: -36.67,
		},
	});
});

app.listen(3000, () => {
	console.log("You server is running on 3000");
});
