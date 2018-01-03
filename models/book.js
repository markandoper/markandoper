var mongoose = require('../db').mongoose;

var BookSchema = new mongoose.Schema({

    name: String,
    price: Number

});

BookSchema.statics.addBook = function (book, callback) {
    this.create(book, callback);
};

module.exports = mongoose.model('Book', BookSchema);