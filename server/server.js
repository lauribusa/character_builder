const Glue = require('glue')
const routes = require('hapi-routes-plugin')
const Bcrypt = require('bcrypt')
const Cookie = require ('hapi-auth-cookie')
const models = require('hapi-moongoose-models-plugin')
const Basic = require('hapi-auth-basic')
const authentication = require('./plugins/authenticate');
const validate = async (request, username, password, h) => {

  const user = request.mongo.db;
  if (!user) {
      return { credentials: null, isValid: false };
  }

  const isValid = await Bcrypt.compare(password, user.password);
  const credentials = { id: user.id, name: user.name };

  return { isValid, credentials };
};
const manifest = {
	server: {
		port: 8000,
		routes: {
			cors: {
				origin: ['*']
			} 
    },

	},
	register: {
		plugins: [
      { 
        plugin: models, 
        options: { 
          database: 'armory'
        } 
      },
      {
        plugin: Basic
      },
      {
        plugin: authentication
      },
      routes
    ],
  }
  
}




const start = async () => {
    try {
      const server = await Glue.compose(manifest)

      await server.start()
      //console.log(manifest.register);
      
      // auth:{
      //   strategy: ('simple', 'basic', { validate }),
      //   default: ('simple')
      // },
      console.log('Server started at :' + server.info.uri)
    } catch (err) {
      console.log('There was an error')
      console.error(err)
      process.exit(1)
    }
  };

  start()