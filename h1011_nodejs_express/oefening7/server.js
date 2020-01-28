var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(3000);
console.log('Express started at http://localhost:3000...');
