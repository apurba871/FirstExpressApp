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

// "/r/<any_thing>" : "Subreddit Homepage"

app.get("/r/:subredditName", function(req, res) {
	var subreddit = req.params.subredditName;
	res.send("Welcome to the " + subreddit.toUpperCase() + " subreddit");
});

// "/r/.../comments/.../..." : "Comments page of a subreddit post"

app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
	console.log(req.params);
	res.send("Welcome to the comments page");
})

// "*" : "Bad Req"
app.get("*", function(req, res) {
	res.send("Error: 404");
});

app.listen(3000, function() {
	console.log("Server started, listening app on port 3000...");
});