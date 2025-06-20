var express = require('express');
var router = express.Router();
const data = require('../data/mydata');

router.get('/', function(req, res, next) {    

    if(!req.session.kosarica){
        req.session.kosarica = {};
    }
    if(typeof req.session.currentCat !== 'number'){
        req.session.currentCat = 0;
    }

    res.render('home', {
        title: 'Home | Matildas Spook Shop',
        categories: data.categories,
        currentCat: req.session.currentCat,
        kosarica: req.session.kosarica || {},
        isCart: false
    });
});

router.get('/getCategories', function(req, res) {
    console.log("Prikazivanje svih kategorija - " + "URL: " + req.url);
    res.json(data.categories);
});

router.get('/getProducts/:id', function(req, res, next) {    
    let id = parseInt(req.params.id);
    if (!Number.isInteger(id) || id < 0 ) {
        return res.status(400).send('Invalid category ID');
    }

    let cat = 0;
    for (let categories of data.categories) {
        if (categories.id === id) {
            break;
        }
        cat++;
    }
    if (cat < data.categories.length) {
        console.log("Kategorija: " + cat + " URL: " + req.url);
        req.session.currentCat = cat;
        res.render('home', {
            title: 'Home | Matildas Spook Shop',
            categories: data.categories,
            currentCat: req.session.currentCat,
            kosarica: req.session.kosarica || {},
            isCart: false
        });
    } else {
        res.status(404).send('Invalid category ID');
    }
});

router.post('/addToCart/:id', function(req, res) {
    const id = parseInt(req.params.id);

    if (!req.session.kosarica) {
        req.session.kosarica = {};
    }
    if (!req.session.kosarica[id]) {
        req.session.kosarica[id] = 0;
    }
    req.session.kosarica[id]++;

    res.json({
        success: true,
        kosarica: req.session.kosarica
    });
});

module.exports = router;