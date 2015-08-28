var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./Controllers/index.js');
var apiController = require('./Controllers/api.js');


var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/nice-notes') 

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
// angular needs to parse json
app.use(bodyParser.json());

app.get('/', indexController.index);
app.get('/payment', indexController.payment);
app.get('/templates/:templateName/', indexController.templates);

app.get('/api/notes', apiController.get)
// app.listen(app.get('port'), function() {
//   console.log("Node app is running on port:" + app.get('port'))
// })

// could not find localhosts
app.listen(process.env.PORT || 5000);

// var server = app.listen(port, function() {
// 	console.log('Express server listening on port ' + port);