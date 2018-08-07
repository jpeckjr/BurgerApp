
//Dependencies 
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

//creates the express app
var app = express();

//set port
var PORT = process.env.PORT || 8080;

//middleware for static files
app.use(express.static(__dirname + '/public'));

/// bodyparsers 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

//override with POST have ? method=Delete or Put
app.use(methodOverride('_method'));

//sets handlebars as templating engine
var exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// now import the routes
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

//initate listener

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
