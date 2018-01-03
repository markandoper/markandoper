var mongoose = require('../db').mongoose;

var PurchaseSchema = new mongoose.Schema({
    memberID: {type: mongoose.Schema.Types.ObjectId, ref: 'Member'}, //text輸入
    cost: Number,
    storeID: {type: mongoose.Schema.Types.ObjectId, ref: 'Store'}, //下拉式選單
    createTime: {type: Date, default: Date.now()}
});

//新增訂單
PurchaseSchema.static.addPurchase = function (purchase , callback) {
    this.create(purchase , callback);
};

//查看個別會員購買次數
PurchaseSchema.static.getMemberPurchaseTime = function (memberID , callback) {
    this.find({memberID:memberID} , callback).count();
};


module.exports = mongoose.model('Purchase',PurchaseSchema);