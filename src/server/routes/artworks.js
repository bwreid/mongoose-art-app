var express = require('express');
var router = express.Router();
var queries = require('../queries');

router.get('/', function(req, res, next) {
  queries.artworks
  .getAll()
  .exec(function (err, artworks) {
    res.render('artworks/index', { artworks: artworks });
  });
});

router.get('/new', function (req, res, next) {
  res.render('artworks/new');
});

router.post('/', function (req, res, next) {
  queries.artworks
  .create(req.body)
  .save(function (err, artwork) {
    if (err) {
      res.render('artworks/new', { 
        errors: err.errors, 
        artwork: req.body 
      });
    } else {
      res.redirect('/artworks')  
    }
  });
});

module.exports = router;
