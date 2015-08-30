var Note = require('../Model/model')

var apiController = {
	get: function(req, res) {
		Note.Note.find({}, function(err, doc) {
			res.send(doc)
		})
	}, 

	noteUpdate: function(req, res) {

		var newNote = new Note;
		newNote.save(function(err, doc) {
			console.log(doc)
			res.send(doc);
		})
	}
}

module.exports = apiController;