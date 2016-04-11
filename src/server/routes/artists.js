var express = require('express');
var router = express.Router();
var artists = require('../queries/artists');

router.get('/', function(req, res, next) {
  artists.getAll().exec(function (err, artists) {
    res.render('artists/index', { artists: artists });  
  });
});

module.exports = router;
