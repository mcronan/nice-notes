var Note = require('../Model/model')

var apiController = {
	get : function(req, res) {
		Note.find({}, function(err, doc) {
			res.send(doc)
		})
	}
}

module.exports = apiController;