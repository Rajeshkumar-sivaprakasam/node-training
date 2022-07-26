console.log("hello");

fetch("http://localhost:3000/weather?address=pds").then((response) => {
	console.log(response);
});
