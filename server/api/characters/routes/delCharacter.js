const Character = require('../models/character');
module.exports = {
  method: 'DELETE',
  path: '/api/characters/{id}',
  handler: async (req, h) => {
    await Character.findOneAndRemove({ id: req.params.id });
    return 'movie deleted';
  }
};