var express = require('express');
var mongoose = require('mongoose');
var carRoutes = require('./routes/car-routes');

mongoose.connect('mongodb://localhost/H13oef', function() {
    console.log('Mongoose connected to DB H13oef');
});

var app = express();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    next();
});

app.use('/cars', carRoutes);

app.listen(3000, () => {
    console.log('Express started at http://localhost:3000...');
});
