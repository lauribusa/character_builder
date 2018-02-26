const Bcrypt = require('bcrypt');
const User = require('../models/user');
const promisify = require("promisify-es6");
const toHash = promisify(Bcrypt.hash);
module.exports = {
    method: 'POST',
    path: '/login',
    handler: async (req, h) => {
      let ifUser = await User.findOne({'username':req.payload.username});
     
      if(ifUser) return console.log('Already exists!');
      let hash = await toHash(req.payload.password, 10)
    
        let newUser = {
          "username": req.payload.username,
          "password": hash
        }
        let user = new User(newUser);
        console.log(newUser);
        try{
          await user.save();
        } catch(err) {
          throw err;
        }
        return user;
      },
    options:{
      auth: false
    }
    }
  