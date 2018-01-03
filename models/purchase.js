var mongoose = require('../db').mongoose;

var PurchaseSchema = new mongoose.Schema({
    member_name: String, //text輸入
    cost: String,
    storeID: String, //下拉式選單
    createTime: String //{type: Date, default: Date.now()}
});

//新增訂單
PurchaseSchema.statics.addPurchase = function (purchase , callback) {
    console.log('B');
    this.create(purchase , callback);
};

//查看個別會員購買次數
PurchaseSchema.statics.getMemberPurchaseTime = function (memberID , callback) {
    this.find({member_name:memberID} , callback).count();
};

module.exports = mongoose.model('Purchase',PurchaseSchema);