var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ArtworkSchema = new Schema({
  currentLocation: {
    minlength: 5,
    type: String,
    required: true
  },
  imageUrl: String,
  name: String,
  year: Number
});

var Artwork = mongoose.model('artworks', ArtworkSchema);

Artwork.find({}, function (err, artworks) {
  console.log('Artwork:', artworks);
});

module.exports = Artwork;