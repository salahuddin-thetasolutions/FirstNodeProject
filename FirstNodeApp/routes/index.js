'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});


/* GET Contact page. */
router.get('/Contact', function (req, res) {
    res.render('contact', { title: 'Express' });
});


/* GET about us page. */
router.get('/aboutus', function (req, res) {
    res.render('aboutus', { title: 'Express' });
});

module.exports = router;
