var express = require('express');
var router = express.Router();
const data = require('../../data.json');

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/data', (req, res, next) => {
    setTimeout(() => {
        res.status(200).json(data);
    }, 1000)
});

module.exports = router;
