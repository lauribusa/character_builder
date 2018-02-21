const Character = require('../models/character');
module.exports = {
  method: 'POST',
  path: '/api/characters',
  handler: async (req, h) => {
    console.log(req.payload);
    let character = new Character(req.payload);
    await character.save();
    return character;
  }
};