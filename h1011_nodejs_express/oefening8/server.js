var express = require('express');
var app = express();
var heroes = require('./json/heroes.json');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/heroes', function (req, res) {
    res.json(heroes);
});

app.get('/heroes/:id', function (req, res) {
    var id = req.params.id;
    heroes.forEach(hero => {
        if (hero.id == id) {
            res.json(hero);
        }
    });
});

app.post('/heroes', function (req, res) {
    var hero = {};
    hero.name = req.body.name;
    hero.dps = req.body.dps;
    hero.class = req.body.class;
    hero.avatar = req.body.avatar;

    res.json(hero);
});

app.listen(3000);
console.log('Express started at http://localhost:3000...');