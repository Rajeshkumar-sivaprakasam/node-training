//nodemon src/app.js -e js,hbs (command to nodemon watch other extension files)
const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
const pathFile = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

//returning a static file
app.use(express.static(pathFile));

//views set to our app
app.set("view engine", "hbs"); //hbs setup //Dynamic web pages
app.set("views", viewPath);
hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
	res.render("index", {
		title: "Index Page",
		author: "Rajesh",
	});
});

//about
app.get("/about", (req, res) => {
	res.render("about", {
		title: "About Page",
		author: "Rajesh",
	});
});

//help
app.get("/help", (req, res) => {
	res.render("about", {
		title: "Help Page",
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

//unmatched route && it should be last one
app.get('*',(req,res)=>{
	res.send('Page Not Found!')
})

app.listen(3000, () => {
	console.log("You server is running on 3000");
});
