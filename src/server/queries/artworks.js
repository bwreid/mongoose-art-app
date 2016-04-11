var db = require('../models');

function getAll() {
  return db.Artwork.find({});
}

module.exports = {
  getAll: getAll
}