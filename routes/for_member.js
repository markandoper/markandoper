var express = require('express');
var router = express.Router();
var MemberModel = require('../models/member');

router.post('/', function (req, res, next) {
    var name = req.body.name;
    var address = req.body.address;
    var phone = req.body.phone;
    var email = req.body.email;
    var birth = req.body.birth;
    var gender = req.body.gender;

    MemberModel.addMember({name: name, address: address, phone: phone, email: email, birth: birth, gender: gender}, function (err, result) {
        if (result) {
            res.render('#', {success: '註冊成功！', error: false});
        } else {
            //註冊失敗
        }
    })

    MemberModel.getMemberByNameAndPhone({name: name, phone: phone}, function (err, result) {

        }
    )

    // MemberModel.getMember()
})

module.exports = router;