//Accessing Mongoose package
const mongoose = require("mongoose");
//Database connection
mongoose.connect(
  "mongodb+srv://userone:userone@nehaproject.w6wbv.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

//Schema definition
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  author: String,
  genre: String,
  image: String,
  about: String,
});

//Model creation
var Bookdata = mongoose.model("bookdata", bookSchema);

module.exports = Bookdata;