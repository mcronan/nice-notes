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
app.get('/templates/forms', indexController.templates);

app.get('/api/notes', apiController.get);
app.post('/api/notes', apiController.noteUpdate)

// Set your secret key: remember to change this to your live secret key in production
// See your keys here https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe.js")
	app.post('/charge', function(request, res) {
		var stripeToken = request.body.stripeToken;


	// (Assuming you're using express - expressjs.com)
	// Get the credit card details submitted by the form

	var charge = stripe.charges.create({
	  amount: 300, // amount in cents, again
	  currency: "eur",
	  source: stripeToken,
	  description: "Example charge"
	}, function(err, charge) {
	  if (err && err.type === 'StripeCardError') {
	    // The card has been declined
	  }
	});

})

// app.get('/charge', function(req, res) {
// 	// res.send("hello")
// })




// app.listen(app.get('port'), function() {
//   console.log("Node app is running on port:" + app.get('port'))
// })
app.listen(process.env.PORT || 5000);

// var server = app.listen(port, function() {
// 	console.log('Express server listening on port ' + port);