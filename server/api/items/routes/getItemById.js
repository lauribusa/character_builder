const Item = require('../models/item');
module.exports = {
  method: 'GET',
  path: '/api/armory/{id}',
  handler: async (req, h) => {
    let item = await Item.find({ id: req.params.id });
    return item;
  }
};