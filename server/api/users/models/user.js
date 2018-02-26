const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({
	username:{
		type: String
	},
	password:{
		type: String
	}
});
module.exports = mongoose.model('User', schema);