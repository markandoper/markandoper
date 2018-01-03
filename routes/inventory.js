var express = require('express');
var router = express.Router();

var StorageModel = require('../models/storage');
var StoreModel = require('../models/store');
var BookModel = require('../models/book');


/* GET users listing. */
router.get('/', function (req, res, next) {

    // BookModel.addBook({name:'作業管理',price:400},function (err, result) {
    //     if(result){
    //         res.render('inventory');
    //     }
    // });

    var query = {};
    var select_store = req.query.store || 'default';
    // if (select_store !== 'default') {
    //     if(select_store == 'store1'){
    //         query.store = '政大分店';
    //     }
    //     query.store = select_store;
    // }

    switch (select_store) {
        case 'default':
            break;
        case 'store1':
            query.store  = "政大分店";
            break;
        case 'store2':
            query.store  = "台大分店";
            break;
        case 'store3':
            query.store  = "信義分店";
            break;
        case 'store4':
            query.store  = "成大分店";
            break;
        case 'store5':
            query.store  = "市府分店";
    }

    //per month
    var d = 15;
    var O = 1;
    var T = 0.1;
    var z = 1.28;
    var s = 5;

    var FOI = d * (O+T) + (z * s * Math.sqrt(O+T));

    StorageModel.getStorage(query, function (err, result) {
        if (result) {
            res.render('inventory', {result: result, FOI: FOI});
        }
    });

});

router.post('/', function (req, res, next) {
    var book = req.body.book;
    var amount = req.body.amount;
    var store = req.body.store;
    var date = new Date().toLocaleString();


    var query = {book: book, store: store};
    var update = {$inc: {amount: +amount}, date: date};


    StorageModel.updateStorage(query, update, function (err, result) {
        if (result) {
            res.redirect('inventory');
        }
    })


});


module.exports = router;
