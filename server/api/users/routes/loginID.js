
const Bcrypt = require('bcrypt')
const User = require('../models/user');
 
           
module.exports = {
	method: 'GET',
	path: '/login/{id}',
	config: {
	    auth: 'simple', 
		handler: async (request, reply)=> {
			let users = await User.find({ id: request.params.id });
			try {
                
				return users+ ' hello, ' + request.auth.credentials.name
            }
            catch (err) {
                throw err;
            }
			
		}
	}
};