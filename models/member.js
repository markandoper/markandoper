var mongoose = require('../db').mongoose;

var MemberSchema = new mongoose.Schema({
    name: String,
    address: String,
    phone: String,
    email: String

});

module.exports.mongoose.model('Member',MemberSchema);