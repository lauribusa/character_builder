const Glue = require('glue');
const routes = require('hapi-routes-plugin');
const models = require('hapi-moongoose-models-plugin');
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

const start = async () => {
    try {
      const server = await Glue.compose(manifest);
      await server.start();
      console.log('Server started at :' + server.info.uri);
    } catch (err) {
      console.log('There was an error');
      console.error(err);
      process.exit(1);
    }
  };

  start();