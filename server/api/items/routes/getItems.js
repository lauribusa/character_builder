const Item = require('../models/item');
module.exports = {
  method: 'GET',
  path: '/api/armory',
  handler: async (req, h) => {
    let items = await Item.find();
    return items;
  }
};