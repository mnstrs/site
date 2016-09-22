var express = require('express');
var app = express();

app.listen(3000, function(){
	console.log("running")
	app.use(express.static('static'));
});


module.exports = app;
