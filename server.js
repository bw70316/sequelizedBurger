var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");


//packages
var port = process.env.PORT || 3000; //connects to port 

var app = express();

// imports my files from my public folder (css)
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);

app.listen(port);