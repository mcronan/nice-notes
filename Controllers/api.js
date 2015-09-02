var Note = require('../model/model')

var apiController = {
	
	get: function(req, res) {
		Note.Note.find({}, function(err, doc) {
			res.send(doc)
		})
	}, 

	noteUpdate: function(req, res) {
		var newNote = new Note.Note(req.body);
		console.log(req.body)
		newNote.save(function(err, doc) {
			console.log(doc)
			res.send(doc);
		})
	}
}

module.exports = apiController;