var mongoose = require('../db').mongoose;

var StorageSchema = new mongoose.Schema({
    book: String,
    amount: Number,
    store: String,
    date: String
});

StorageSchema.statics.updateStorage = function (query, update, callback) {

    this.update(query, update, {upsert: true}, callback);
};

StorageSchema.statics.getStorage = function (query, callback) {

    this.find(query, callback);
};

module.exports = mongoose.model('Storage', StorageSchema);