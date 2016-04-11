var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ArtistSchema = new Schema({
  imageUrl: String,
  name: String,
  movement: String,
  quotes: [String],
  artworks: [{ type: Schema.Types.ObjectId, ref: 'artworks'}]
});

var Artist = mongoose.model('artists', ArtistSchema);

Artist.find({}).populate('artworks')
.exec(function (err, artists) {
  console.log('Artists:', artists[0].artworks);
});

module.exports = Artist;