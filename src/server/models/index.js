var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-art-app');

module.exports.Artist = require('./artist');
module.exports.Artwork = require('./artwork');