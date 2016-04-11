var express = require('express');
var router = express.Router();
var artworks = require('../queries/artworks');

router.get('/', function(req, res, next) {
  artworks.getAll().exec(function (err, artworks) {
    res.render('artworks/index', { artworks: artworks });
  });
});

module.exports = router;
