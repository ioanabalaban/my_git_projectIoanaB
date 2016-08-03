var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var specificationSchema = new Schema({
  label: String,
  value: String
});

var Specification = mongoose.model('specification', specificationSchema);

module.exports = Specification;
