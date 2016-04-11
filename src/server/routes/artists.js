var express = require('express');
var router = express.Router();
var queries = require('../queries');

router.get('/', function(req, res, next) {
  queries.artists
  .getAll()
  .exec(function (err, artists) {
    res.render('artists/index', { artists: artists });  
  });
});

module.exports = router;
