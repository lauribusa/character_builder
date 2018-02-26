const Character = require('../models/character');
module.exports = {
  method: 'GET',
  path: '/api/characters',
  handler: async (req, h) => {
    let characters = await Character.find();
    return characters;
  },
  options:{
    auth: false
  }
};