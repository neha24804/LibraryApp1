//accessing mongoose package
const mongoose = require("mongoose");
//database connection
mongoose.connect(
  "mongodb+srv://userone:userone@nehaproject.w6wbv.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

//schema definition
const Schema = mongoose.Schema;
//constructor
const authorSchema = new Schema({
  name: String,
  place: String,
  genre: String,
  image: String, 
  about: String,
});
//model creation
var Authordata = mongoose.model("authordata", authorSchema);
//exporting the model
module.exports = Authordata;
