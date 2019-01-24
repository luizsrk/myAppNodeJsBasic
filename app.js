// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });

var express = require('express'),
    fs = require('fs'),
    app = express();
 
var app = express();
 
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
 
 
app.get('/', function(req, res) {
    res.send('Hello Josmil from NodeJS  at '+ new Date());
});
 
 
app.listen(8080, ip);
 
module.exports = app;