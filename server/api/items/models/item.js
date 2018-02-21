const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({
	name: {
		type: String
	},
	id:{
		type: Number
	},
	type: {
		type: String
	},
	rarity: {
		type: String
	},
	img: {
		type: String
	},
	value: {
		type: Number
	},
	atk:{
		type: Number
	},
	def:{
		type: Number
	},
	matk: {
		type: Number
	},
	mdef:{
		type: Number
	},
	spd:{
		type: Number
	},
	hit: {
		type: Number
	},
	desc:{
		type: String
	}
});

module.exports = mongoose.model('Item', schema);