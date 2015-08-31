var Note = require('../Model/model')

var indexController = {
	index: function(req, res) {
		res.render('../views/index');
	}, 
	payment: function(req, res) {
		res.render('../views/payment');
	} 
}


module.exports = indexController;