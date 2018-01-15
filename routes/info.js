var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('info', { title: 'Express' });

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
        case 'book1':
            query.book  = "政大分店";
            break;
        case 'book2':
            query.book  = "台大分店";
            break;
        case 'book3':
            query.book  = "信義分店";
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



module.exports = router;