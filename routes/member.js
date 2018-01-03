var express = require('express');
var router = express.Router();
var MemberModel = require('../models/member');

/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('member', { title: 'Express' });
// });

router.get('/',function (req, res, next) {
    var query = {};
    var select_gender = req.query.gender || 'default';
    if( select_gender != 'default'){
        query.gender = select_gender;
    }

    MemberModel.getMember(query, function (err, result) {
        if(result){
            res.render('member', {result: result} );
        }else{
            console.log('aaa');
        }
    })

});

router.post('/', function (req, res, next) {
    var name = req.body.name;
    var address = req.body.address;
    var phone = req.body.phone;
    var email = req.body.email;
    var birth = req.body.birth;
    var gender = req.body.gender;

    MemberModel.addMember({name: name, address: address, phone: phone, email: email, birth: birth, gender: gender}, function (err, result) {
        if (result) {
            //會跳回首頁 但希望留在原頁面
            res.redirect('/');
        }
    });

    //放這不知道對不對
    MemberModel.getMemberByNameAndPhone({name: name, phone: phone}, function (err, result) {
        if(result){
            res.render('member',{result: result});
        }
        }
    )

    // MemberModel.getMember()
});

module.exports = router;



