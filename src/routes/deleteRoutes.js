const express = require("express");
const deleteRouter = express.Router();
const Bookdata = require("./model/Bookdata");
const Authordata = require("./model/Authordata");

function router(nav) {
  deleteRouter.get("/book/:id", function(req, res){
    const id = req.params.id;
    Bookdata.findOne({ _id: id }).then(function(book){
      res.render("bookdel", {
        nav,
        title: "Delete Book",
        book,
      });
    });
  });
  deleteRouter.get("/author/:id", function(req, res){
    const id = req.params.id;
    Authordata.findOne({ _id: id }).then(function(author){
      res.render("authordel", {
        nav,
        title: "Delete Author",
        author,
      });
    });
  });
  deleteRouter.get("/book/:id/confirm", function(req, res){
    const id = req.params.id;
    Bookdata.deleteOne({ _id: id }).then(function() {
      res.redirect("/books");
    });
  });
  deleteRouter.get("/author/:id/confirm", function(req, res){
    const id = req.params.id;
    Authordata.deleteOne({ _id: id }).then(function(){
      res.redirect("/authors");
    });
  });
  return deleteRouter;
}

module.exports = router;