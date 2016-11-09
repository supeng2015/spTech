var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/user');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
});
module.exports = mongoose;