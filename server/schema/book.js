var mongoose = require("mongoose");
var {Schema} = mongoose;

var bookSchema = new Schema({
  'isbn' : String,
  'title' : String,
  'subtitle': String,
  'author': String,
  'published': String,
  'publisher': String,
  'pages': Number,
  'description': String,
  'website':String
});
module.exports = mongoose.model('book',bookSchema);
