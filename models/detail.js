var mongoose = require('../db').mongoose;

var DetailSchema = new mongoose.Schema({
    purchaseID: {type: mongoose.Schema.Types.ObjectId, ref: 'Purchase'},
    price: String,
    bookID: {type: mongoose.Schema.Types.ObjectId, ref: 'Book'}

});

module.exports = mongoose.model('Detail', DetailSchema);