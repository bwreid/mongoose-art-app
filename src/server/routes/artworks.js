var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res, next) {
  db.Artwork.find({}, function (err, artworks) {
    res.render('artworks/index', { artworks: artworks });
  });
});

module.exports = router;
