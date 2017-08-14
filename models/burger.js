var orm = require('../config/orm.js');

var burger = {

	//create method for creating new burgers
	create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
	},
		//update method for updating new burgers
	update: function(objColVals, condition, cb) {
		orm.update('burgers', objColVals, condition, function(res){
			cb(res);
		});
	},
		//all method for selecting all
	all: function(cb) {
		orm.all('burgers', function(res){
			cb(res);
		});
	}
};

//exporting burger and methods to be use by other files
module.exports = burger;