var mongoose = require('../db').mongoose;

var StoreSchema = new mongoose.Schema({
    name: String,
    address: String,
    phone: String
});

module.exports = mongoose.model('Store',StoreSchema);