var db = require('../models');

function getAll() {
  return db.Artwork.find({}).populate('_artist');
}

function create (body, cb) {
  return new db.Artwork(body);
}

module.exports = {
  getAll: getAll,
  create: create
}