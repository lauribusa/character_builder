const Bcrypt = require('bcrypt')
const User = require('../models/user');
 
           
module.exports = {
	method: 'GET',
	path: '/login',
	config: {
	    auth: 'simple', 
		handler: async (request, reply)=> {
			let users = await User.find();
			try {
                
				return users+ ' hello, ' //+ request.auth.credentials.name
            }
            catch (err) {
                throw err;
            }
			
		}
	}
};