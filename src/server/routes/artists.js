var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res, next) {
  db.Artist.find({}, function (err, artists) {
    res.render('artists/index', { artists: artists });  
  });
});

module.exports = router;
