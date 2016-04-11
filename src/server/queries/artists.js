var db = require('../models');

function getAll() {
  return db.Artist.find({}).populate('artworks');
}

module.exports = {
  getAll: getAll
}