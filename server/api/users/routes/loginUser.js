const Bcrypt = require('bcrypt')

module.exports = {
	method: 'GET',
	path: '/login',
	config: {
		auth: 'simple',
		handler: (request, reply)=> {
			reply('hello, ' + request.auth.credentials.name);
		}
	}
};