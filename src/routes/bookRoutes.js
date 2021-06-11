const express = require('express');
const booksRouter = express.Router();

function router(nav){
    var books = [
        {
            title: "Tom and Jerry",
            author: "Joseph Barbera",
            genre: "Cartoon",
            img: "t&j.jpg"
        
        },
        {
            title: "The Alchemist",
            author: "Paulo Coelho",
            genre: "Novel",
            img: "alchemist.jpg"
        
        },
        {
            title: "the Kite Runner",
            author: "Khaled Hosseini",
            genre: "Drama",
            img: "kite.jpg"
        
        }
    ];
    
    booksRouter.get('/',function(req,res){
        res.render("books",
        {
            nav,
            title:'Library',
            books
    
        });
    });
    
    booksRouter.get('/:id', function(req,res){
        const id = req.params.id
        res.render('book',{
            nav,
            title:'Library',
            book: books[id]
        });
    });

    return booksRouter;

}



module.exports = router;
