const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const nav = [
    {link:'/index',name:'Home'},
    {link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'},
    {link:'/signUp',name:'Signup'},
    {link:'/logIn',name:'Login'},
];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorRouter = require('./src/routes/authorRoutes')(nav);
const signUpRouter = require('./src/routes/signUpRoutes')(nav);
const logInRouter = require('./src/routes/logInRoutes')(nav);

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/signUp',signUpRouter);
app.use('/logIn',logInRouter);

app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
});



app.listen(port,()=>{console.log("Server Ready at" + port)});