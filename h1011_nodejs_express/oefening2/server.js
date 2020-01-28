var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send(JSON.stringify({voornaam: 'Peter', achternaam: 'Kassenaar', email: 'info@kassenaar.com'}, null, 4));
});

app.listen(3000);
console.log('Express server gestart op http://localhost:3000...');