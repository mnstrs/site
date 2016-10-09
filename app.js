var express = require('express');
var app = express();

app.listen(3000, function(){

  // set the view engine to ejs
  app.set('view engine', 'ejs');

  // css and
  app.use(express.static('views'));

  // index page
  app.get('/', function(req, res) {
      res.render('index');
  });


 // portfolios
  app.get('/casa-decorativa', function (req, res) {
    res.render('casa-decorativa');
  });

  app.get('/babies-buh', function (req, res) {
    res.render('babies-buh');
  });

  app.get('/danubio', function (req, res) {
    res.render('danubio');
  });

  console.log('3000 is the magic port');

});

module.exports = app;
