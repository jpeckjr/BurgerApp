
//bring in orm to talk to the database
var orm = require("../config/orm.js");

//burger variable to be exported to controller
var burger = {
	//gets all burgers
	selectAll: function(cb) {
		orm.selectAll('burgers', function(res) {
			cb(res);
		});
	},
	//inserts new burger
	insertOne: function(cols, vals, cb) {
		orm.insertOne('burgers', cols, vals, function(res) {
			cb(res);
		});
	},
	//updates burger status
	updateOne: function(objColVals, condition, cb) {
		orm.updateOne('burgers', objColVals, condition, function(res) {
			cb(res);
		});
	}
};


module.exports = burger;