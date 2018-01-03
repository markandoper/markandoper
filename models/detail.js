var mongoose = require('../db').mongoose;

var DetailSchema = new mongoose.Schema({
    purchaseID: String,
    price: Number,
    bookID: String
});

//新增訂單詳細 (FK處理)
DetailSchema.statics.add = function (detail, callback) {
    this.create(detail,callback);
};

module.exports = mongoose.model('Detail', DetailSchema);