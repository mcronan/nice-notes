var Note = require('../Model/model')

var indexController = {
	index: function(req, res) {
		res.render('index');
	}, 
	// templates: function(req, res) {
	// 	res.render('templates/forms')
	// },
	payment: function(req, res) {
		res.render('payment');
	} 
}


module.exports = indexController;