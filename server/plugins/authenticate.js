const Bcrypt = require('bcrypt');
const User = require('../api/users/models/user');
const validate = async (request, username, password, h) => {
	//console.log(request.mongo.db.collection('users'));
	//const db = request.mongo.db;
	const user = User.find();
	//console.log(request.mongo.db);
	if (!user) {
		return { credentials: null, isValid: false };
	}
	const isValid = await Bcrypt.compare(password, user.password);
	const credentials = { id: user.id, name: user.username };
	console.log(user);
	return { isValid, credentials };
  };

module.exports = {
	register: async (server, options) =>{
		server.auth.strategy('simple', 'basic', { validate });
    	server.auth.default('simple');
	},
	name: "authentication",
	version: "0.0.1",
	once: true,
	options: {}
}