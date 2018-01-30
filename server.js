// Include Server Dependencies
var express = require("express");

var path = require("path");

// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 8000;

app.use(express.static('./dist'));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'))
});

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
