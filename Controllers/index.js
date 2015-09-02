var Note = require('../Model/model')

var indexController = {
	index: function(req, res) {
		res.render('index');
	}, 
	payment: function(req, res) {
		res.render('payment');
	} 
}


module.exports = indexController;