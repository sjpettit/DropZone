var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PicSchema   = new Schema({
	name: String
});

module.exports = mongoose.model('Pic', PicSchema);