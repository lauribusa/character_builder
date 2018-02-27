const Movie = require('../models/character');
module.exports = {
  method: 'PUT',
  path: '/api/characters/{id}',
  handler: async (req, h) => {
    console.log(req.payload);
    // return Movie.findByIdAndUpdate(
    //   req.params.id,
    //   { $set: req.payload },
    //   { new: true }
    // );
    return await Character.findOneAndUpdate(
      { id: req.params.id },
      { $set: req.payload },
      { new: true }
    );
  }
};