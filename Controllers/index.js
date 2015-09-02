var Note = require('../model/model')

var indexController = {
	index: function(req, res) {
		res.render('index');
	}, 
	payment: function(req, res) {
		res.render('payment');
	} 
}


module.exports = indexController;