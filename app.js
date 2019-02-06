var express = require("express");
var path = require("path");
var mongoose = require('mongoose');
var config = require('./config/database');
var bodyParser = require('body-parser');



//connect to db
mongoose.connect(config.database);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connected to mongodb');
});
//init app
var app = express();

//view engine set up

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//set public folder
app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//set routes
var pages = require('./routes/pages.js');
var adminPages = require('./routes/admin_pages.js');

app.use('/admin/pages', adminPages);
app.use('/', pages);


//start the server
var port = 3000;
app.listen(port, function () {
    console.log('server started on port' + port);
})