const Bcrypt = require('bcrypt');
const validate = async (request, username, password, h) => {

	const user = request.mongo.db;
	if (!user) {
		return { credentials: null, isValid: false };
	}
  
	const isValid = await Bcrypt.compare(password, user.password);
	const credentials = { id: user.id, name: user.name };
  
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