const Bcrypt = require('bcrypt')

module.exports = {
	method: 'GET',
	path: '/login',
	config: {
	    //auth: 'simple', 
		handler: (request, reply)=> {
			console.log(request);
			return 'hello, ' //+ request.auth.credentials.name
		}
	}
};