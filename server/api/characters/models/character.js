const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({
	name: {
		type: String
	},
	owner:{
		type: String
	},
	class: {
		type: String
	},
	level: {
		type: Number
	},
	id: {
		type: Number
	},
	xp: {
		type: Number
	},
	gold: {
		type: Number
	},
	maxHP: {
		type: Number
	},
	curHP: {
		type: Number
	},
	maxSP: {
		type: Number
	},
	curSP: {
		type: Number
	},
	str: {
		type: Number
	},
	int: {
		type: Number
	},
	con: {
		type: Number
	},
	agl: {
		type: Number
	},
	equip: {
		rightHand: {
			name: {
				type: String
			},
			img: {
				type: String
			},
			atk: {
				type: Number
			},
			def: {
				type: Number
			},
			matk:{
				type: Number
			},
			mdef:{
				type: Number
			},
			spd: {
				type: Number
			},
			hit: {
				type: Number
			}
		},
		leftHand: {
			name: {
				type: String
			},
			img: {
				type: String
			},
			atk: {
				type: Number
			},
			def: {
				type: Number
			},
			matk:{
				type: Number
			},
			mdef:{
				type: Number
			},
			spd: {
				type: Number
			},
			hit: {
				type: Number
			}
		},
		headArmor: {
			name: {
				type: String
			},
			img: {
				type: String
			},
			atk: {
				type: Number
			},
			def: {
				type: Number
			},
			matk:{
				type: Number
			},
			mdef:{
				type: Number
			},
			spd: {
				type: Number
			},
			hit: {
				type: Number
			}
		},
		bodyArmor: {
			name: {
				type: String
			},
			img: {
				type: String
			},
			atk: {
				type: Number
			},
			def: {
				type: Number
			},
			matk:{
				type: Number
			},
			mdef:{
				type: Number
			},
			spd: {
				type: Number
			},
			hit: {
				type: Number
			}
		},
		legArmor: {
			name: {
				type: String
			},
			img: {
				type: String
			},
			atk: {
				type: Number
			},
			def: {
				type: Number
			},
			matk:{
				type: Number
			},
			mdef:{
				type: Number
			},
			spd: {
				type: Number
			},
			hit: {
				type: Number
			}
		}
	},
	skills: [
		{
			name:{
				type: String
			},
			desc: {
				type: String
			}
		},
		{
			name:{
				type: String
			},
			desc: {
				type: String
			}
		},
		{
			name:{
				type: String
			},
			desc: {
				type: String
			}
		},
		{
			name:{
				type: String
			},
			desc: {
				type: String
			}
		},
		{
			name:{
				type: String
			},
			desc: {
				type: String
			}
		}
	]
});

module.exports = mongoose.model('Character', schema);