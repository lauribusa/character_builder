const Bcrypt = require('bcrypt');
module.exports = {
    method: 'POST',
    path: '/login',
    handler: async (req, h) => {
      let items = await Item.find();
      return items;
    }
  };