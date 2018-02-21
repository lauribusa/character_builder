const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({
	username:{
		type: String
	},
	password:{
		type: String
	},
	id:{
		type: Number
	}
});
module.exports = mongoose.model('User', schema);