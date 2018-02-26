const Character = require('../models/character');
module.exports = {
  method: 'GET',
  path: '/api/characters/{id}',
  handler: async (req, h) => {
    let character = await Character.find({ id: req.params.id });
    return character;
  },
  options:{
    auth: false
  }
};