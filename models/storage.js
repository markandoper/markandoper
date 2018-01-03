var mongoose = require('../db').mongoose;

var StorageSchema = new mongoose.Schema({
    bookID: {type: mongoose.Schema.Types.ObjectId, ref: 'Book'},
    amount: String,
    storeID: {type: mongoose.Schema.Types.ObjectId, ref: 'Store'}
});

module.exports = mongoose.model('Storage',StorageSchema);