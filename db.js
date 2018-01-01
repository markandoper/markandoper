var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/mark_and_oper', {useMongoClient: true});

exports.mongoose = mongoose;