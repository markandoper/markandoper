var express = require('express');
var router = express.Router();

var PurchaseModel = require('../models/purchase')


router.get('/', function(req, res, next) {
    res.render('salereport', { title: 'Express' });
});



module.exports = router;