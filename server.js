var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

//packages
var PORT = process.env.PORT || 3000; //connects to port 

var app = express();
var db = require("./models");


app.use(bodyParser.json());
app.use(bodyParser.text());
// imports my files from my public folder (css)

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));




app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



var routes = require("./controllers/burgers_controllers.js");
app.use("/", routes);

db.sequelize.sync().then(function() {
	app.listen(PORT, function(){
		console.log("Listening on PORT" + PORT);
	});
});