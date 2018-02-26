const Item = require('../models/item');
module.exports = {
  method: 'POST',
  path: '/api/armory',
  handler: async (req, h) => {
    console.log(req.payload);
    let item = new Item(req.payload);
    await item.save();
    return item;
  },
  options:{
      auth:false
  }
};