var mongoose = require('../db').mongoose;

var BookSchema = new mongoose.Schema({

    name: String,
    price: String

});

module.exports = mongoose.model('Book', BookSchema);