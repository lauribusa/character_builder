const Bcrypt = require('bcrypt');
const User = require('../models/user');
module.exports = {
    method: 'POST',
    path: '/login',
    handler: async (req, h) => {
      let users = await User.find();
      return users;
    }
  };