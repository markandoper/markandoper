var mongoose = require('../db').mongoose;

var StoreSchema = new mongoose.Schema({
    name: String,
    address: String,
    phone: String
});

StoreSchema.statics.addStore = function (store, callback) {
    this.create(store, callback);
};

module.exports=mongoose.model('Store',StoreSchema);