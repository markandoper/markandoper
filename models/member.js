var mongoose = require('../db').mongoose;

var MemberSchema = new mongoose.Schema({
    name: String,
    address: String,
    phone: String,
    email: String,
    birth: String,
    gender: String
});
//新增會員
MemberSchema.statics.addMember = function (member, callback) {
    this.create(member, callback);
}

//查詢單一會員 (透過name,phone)
MemberSchema.statics.getMemberByNameAndPhone = function (member, callback) {
    this.findOne(member, callback);
}

//查詢所有會員
MemberSchema.statics.getMember = function (member , callback) {
    this.find(member, callback);
}

module.exports = mongoose.model('Member',MemberSchema);