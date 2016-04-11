var db = require('../models');

function getAll() {
  return db.Artwork.find({});
}

function create (body, cb) {
  return new db.Artwork(body);
}

module.exports = {
  getAll: getAll,
  create: create
}