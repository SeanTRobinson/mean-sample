// Modules ==================================
var express         = require('express');
var app             = express();
var mongoose        = require('mongoose');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');

// Configuration ============================

// Config Files
var db = require('./config/db');
var port = process.env.port || 8080;
mongoose.connect(db.url);

// Get all data/stuff of the body (POST) parameters
app.use(bodyparser.json());
app.use(bodyParser.json( {type: 'application/vnd.api+json'} ));
app.use(bodyParser.urlencoded( {extended: true} ));

app.use(methodOverride('x-HTTP-Method-Override'));
app.use(express-static(__dirname + '/public'));

// Routes ===================================
require('./app/route's)(app);

// Startup ==================================
app.listen(port);
console.log("Listening on port " + port);
exports = module.exports = app;
