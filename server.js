//Modules required for the burger applicaiton
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

//Configuration of express application working with Heroku or locally with 8080
var app = express();
var PORT = process.env.PORT || 8080;

//Parsing settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//Application settings for express
app.use(express.static(path.join(__dirname, '/public')));
app.use(methodOverride("_method"));

//Settings for express handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var routes = require("./controllers/burgers_controller.js");

//Start of server
app.use("/", routes);
app.listen(PORT);
