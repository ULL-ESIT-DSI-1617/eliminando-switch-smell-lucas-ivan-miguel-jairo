"use strict";
var express = require('express'),
    app = express()
var path = require('path');

  

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');



app.get('/', function(req, res) {
  
  res.render('index');
  
});

app.use(express.static('public'));
app.use(express.static('public/materialize'));
app.use(express.static('public/materialize/css'));
app.use(express.static('public/materialize/fonts'));
app.use(express.static('public/materialize/js'));
app.use(express.static('public/css'));
app.use(express.static('public/js'));
app.use(express.static('public/less'));


// Crear puesto de escucha
app.set('port', (process.env.PORT || 8080));
app.listen(app.get('port'), function() {
  console.log('Node app ejecutandose en el puerto', app.get('port'));
});
