var mongoose = require('mongoose');

var noteSchema = mongoose.Schema({
		sendName        : String,
		sendEmail       : String,
		receiveName     : String,
		receiveAddress  : String,
		note            : String, 
})

var Note = mongoose.model('Note', noteSchema);

module.exports = {
	Note : Note
}