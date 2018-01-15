var express = require('express');
var router = express.Router();

var PurchaseModel = require('../models/purchase')


router.get('/', function(req, res, next) {
    res.render('rank_two', { title: 'Express' });
});

router.post('/', function (req, res, next) {
    var member_name = req.body.member_name;
    var cost = req.body.cost;
    var storeID = req.body.storeID;
    var createTime = new Date().toLocaleString();

    console.log(member_name);
    console.log(cost);
    console.log(storeID);
    console.log(createTime);
    // var query = {member_name: member_name, store: store, amount: amount , date: date};
    // var update = {$inc: {amount: +amount}, date: date};

    PurchaseModel.addPurchase({member_name: member_name, cost: cost, storeID: storeID , createTime: createTime}, function (err, result) {
        if (result) {
            res.redirect('/');
        }
    })

});



module.exports = router;