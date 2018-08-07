
//bring in express and brings in burger.js
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// adds an endpoint that redirects to the /index route
router.get('/', function(req, res) {
	res.redirect('/index');
});

//add an endpoint that gets all the burgers
//renders the index file by passing in all burgers 
//as an object from handlebars to use

router.get('/index', function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {burgers: data};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

//adds another endpoint that posts the burger name entered
//as a callback it redirects back to the /index route

router.post('/burgers/insertOne', function(req, res) {
	burger.insertOne(['burger_name', 'devoured'], [req.body.name, false], function() {
		res.redirect('/index');
	});
});

//add a burgers/updateOne/:id route that updates the status of the burger from 
//being uneaten to eaten then does a call back to the /index endpoint

router.put('/burgers/updateOne/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;
	console.log('condition', condition);

	burger.updateOne({devoured: req.body.devoured}, condition, function() {
		res.redirect('/index');
	});
});

//export the router back to the server
module.exports = router;