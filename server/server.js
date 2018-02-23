const Glue = require('glue');
const routes = require('hapi-routes-plugin');
const Bcrypt = require('bcrypt');
const Mongo = require ('hapi-mongodb');
const Cookie = require ('hapi-auth-cookie')
const models = require('hapi-moongoose-models-plugin')
const Basic = require('hapi-auth-basic')
const authenticate = require('./plugins/authenticate');

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
        plugin: Mongo,
        options: {
          url: 'mongodb://localhost:27017/armory',
          settings: {
              poolSize: 10
          },
          decorate: true
        }
      },
      {
        plugin: Basic
      },
      {
        plugin: authenticate
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