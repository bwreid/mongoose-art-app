var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res, next) {
  db.Artist
  .find({})
  .populate('artworks')
  .exec(function (err, artists) {
    res.render('artists/index', { artists: artists });  
  });
});

module.exports = router;
