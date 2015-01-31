// comment.js
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PostSchema   = new Schema({
    author: String,
	title: String,
	message: String
});

module.exports = mongoose.model('Post', PostSchema);