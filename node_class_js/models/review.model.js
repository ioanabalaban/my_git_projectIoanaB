var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
  author: String,
  text: String,
  rating: {type: Number, min: 1, max: 5, required: true}
});

var Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
