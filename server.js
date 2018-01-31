// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 8000;

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

app.use(express.static('./app/dist'));
app.use('/', require('./controller/routes.js'));

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
