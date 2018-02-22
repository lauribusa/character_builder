const Bcrypt = require('bcrypt');
const validate = function (request, username, password, callback) {
	const user = username;
	if (!user) {
		return callback(null, false);
	}

	Bcrypt.compare(password, user.password, (err, isValid) => {
		callback(err, isValid, { id: user.id, name: user.name });
	});
};
const Hoek = require('hoek');

exports.register = (server, Basic, options, next) => {  
	// register dependency to hapi-auth-cookie
	// and make sure it’s available to this plugin
	server.register({
		register: require('hapi-auth-cookie')
	}, err => {
		Hoek.assert(!err, 'Cannot register authentication plugin')

		// configure the "session" strategy
		server.auth.strategy('simple', 'basic', { validateFunc: validate });

		next();

	});
};