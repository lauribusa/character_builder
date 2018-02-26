const Item = require('../models/item');
module.exports = {
  method: 'GET',
  path: '/api/armory',
  handler: async (req, h) => {
    let items = await Item.find();
    return items;
  },
  options:{
    auth:false
  }
  
};

//{"_id":"5a8d59c20e31f92aae1d492c","name":"Zweihander","id":0,"type":"Epée à deux mains","rarity":"Normal","img":"/zweihander.png","value":15,"atk":20,"def":0,"matk":0,"mdef":0,"spd":0,"hit":10,"desc":"Une arme à deux mains classique, d'origine germanique."}