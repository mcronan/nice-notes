var mongoose = require('mongoose');

var noteSchema = mongoose.Schema({
		sendName        : String,
		sendEmail       : String,
		receiveName     : String,
		address1  		: String,
		address2  		: String,
		address3  		: String,
		address4  		: String,
		address5  		: String,
		note            : String, 
})

var Note = mongoose.model('Note', noteSchema);

module.exports = {
	Note : Note
}