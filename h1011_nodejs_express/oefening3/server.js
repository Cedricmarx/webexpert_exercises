// var http = require('http');
// var server = http.createServer((request, response) => {
//     if (request.url === '/person') {
//         response.writeHead(200, {'Content-Type': 'application/json'});
//         response.write(JSON.stringify({voornaam: 'Peter', achternaam: 'Kassenaar', email: 'info@kassenaar.com'}, null, 2));
//         response.end();
//         return;
//     }

//     if (request.url === '/contact') {
//         response.writeHead(200, {'Content-Type': 'application/json'});
//         response.write(JSON.stringify({adres: 'Dorpsstraat 24', postcode: '1408 AA', plaats: 'Amsterdam', openingstijden: 'Dagelijks van 09:00 - 17:00'}, null, 2));
//         response.end();
//         return;
//     }
// });

var express = require('express');
var app = express();

app.get('/person', function(req, res) {
    res.json({voornaam: 'Peter', achternaam: 'Kassenaar', email: 'info@kassenaar.com'});
});

app.get('/contact', function(req, res) {
    res.json({adres: 'Dorpsstraat 24', postcode: '1408 AA', plaats: 'Amsterdam', openingstijden: 'Dagelijks van 09:00 - 17:00'});
});

app.get('/', function(req,res) {
    res.json({status: '404', message: 'Not found...'});
});

app.listen(3000);
console.log('Express app started at http://localhost:3000...');