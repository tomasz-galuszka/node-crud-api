const express = require('express');
const bodyParser = require('body-parser');

const portNumber = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
	    message: err.message,
	    error: err
	});
});

require('./routes/featureToggle.routes.js')(app);
app.listen(portNumber, () => {

	console.log('Listenning on port: ' + portNumber);

});




