var mongoose = require('../db').mongoose;

var DetailSchema = new mongoose.Schema({
    purchaseID: {type: mongoose.Schema.Types.ObjectId, ref: 'Purchase'},
    price: Number,
    bookID: {type: mongoose.Schema.Types.ObjectId, ref: 'Book'}

});

//新增訂單詳細 (FK處理)
DetailSchema.statics.add = function (detail, callback) {
    this.create(detail,callback);
}

module.exports = mongoose.model('Detail', DetailSchema);