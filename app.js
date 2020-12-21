var express = require("express");
var app = express();

//Creating routes...

// "/" : "Hi there, I am here!"

app.get("/", function(req, res) { //req & res are objects
	res.send("Hi there, I am here!");
});

// "/bye" : "Goodbye!"

app.get("/bye", function(req, res) {
	res.send("Goodbye!");
});

// "/meooow" : "Greetings master"
app.get("/meooow", function(req, res) {
	res.send("Hello meooow25, long time no see...");
});

app.listen(3000, function() {
	console.log("Server started, listening app on port 3000...");
});