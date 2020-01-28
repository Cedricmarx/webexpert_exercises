var express = require('express');
var Car = require('../models/car');
var bodyParser = require('body-parser');

var router = express.Router();
router.use(bodyParser.json());

router.get('/', function(req, res) {
    Car.find((err, cars) => {
        if (err) {
            res.send(err);
        }

        res.json(cars);
    });
});

router.get('/:id', function(req, res) {
    Car.findById(req.params.id, (err, car) => {
        if (err) {
            res.send(err);
        } 

        res.json(car);
    });
});

router.post('/', function(req, res) {
    var car = new Car({manufacturer: req.body.manufacturer, model: req.body.model, price: req.body.price, wiki: req.body.wiki});
    car.save();
    res.json(car);
});

router.delete('/:id', function(req, res, next) {
    Car.remove({_id: req.params.id}, function(err, removed) {
        if (err) {
            return next(err);
        }

        res.json(removed);
    })
});

router.put('/', function(req, res) {
    Car.findById(req.body._id, (err, car) => {
        car.manufacturer = req.body.manufacturer;
        car.model = req.body.model;
        car.price = req.body.price;
        car.wiki = req.body.wiki;

        car.save((saveErr, saveCar) => {
            if (saveErr) {
                res.send(saveErr);
            }

            res.send(saveCar);
        })
    });
});

module.exports = router;