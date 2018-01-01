var mongoose = require('../db').mongoose;

var PurchaseSchema = new mongoose.Schema({
    memberID: {type: mongoose.Schema.Types.ObjectId, ref: 'Member'},
    cost: String,
    storeID: {type: mongoose.Schema.Types.ObjectId, ref: 'Store'},
    createTime: {type: Date, default: Date.now()}
});

module.exports.mongoose.model('Purchase',PurchaseSchema);