const express = require("express");
const path = require("path");
const app = express();
const pathfile = path.join(__dirname, "../public");

//returning a static file
app.use(express.static(pathfile));
app.set("view engine", "hbs"); //hbs setup //Dynamic web pages

app.get("", (req, res) => {
	res.render("index", {
		title: "index",
		author: "Rajesh",
	});
});

//about
// app.get("/about", (req, res) => {
// 	res.send("<h1>About Page!</h1>");
// });
//about
app.get("/about", (req, res) => {
	res.render("about", {
		title: "About Page",
		author: "Rajesh",
	});
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
