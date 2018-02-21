const Glue = require('glue');
const routes = require('hapi-routes-plugin');
const models = require('hapi-moongoose-models-plugin');
const Basic = require('hapi-auth-basic');
const manifest = {
	server: {
		port: 8000,
		routes: {
			cors: {
				origin: ['*']
			} 
		} 
	},
	register: {
		plugins: [{ plugin: models, options: { database: 'armory' } }, routes]
	}
};
const validate = (request, username, password, callback) => {
  const user = users[username];
    if (!user) {
        return callback(null, false);
    }

    Bcrypt.compare(password, user.password, (err, isValid) => {
        callback(err, isValid, { id: user.id, name: user.name });
    });
};


const start = async () => {
    try {
      const server = await Glue.compose(manifest);
     // server.auth.strategy('simple', 'basic', { validateFunc: validate });
      await server.start();
      
      console.log('Server started at :' + server.info.uri);
    } catch (err) {
      console.log('There was an error');
      console.error(err);
      process.exit(1);
    }
  };

  start();