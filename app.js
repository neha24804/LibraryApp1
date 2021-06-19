const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

var nav = [
    {link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'},
    {link:'/',name:'Logout'},
    {link:'/addbook',name:'Add a book'},
];

const homeRouter = require("./src/routes/homeRoutes")(nav);
const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorRouter = require('./src/routes/authorRoutes')(nav);
const signUpRouter = require('./src/routes/signUpRoutes')(nav);
const logInRouter = require('./src/routes/logInRoutes')(nav);
const addRouter = require("./src/routes/addRoutes")(nav);
const updateRouter = require("./src/routes/updateroutes")(nav);
const deleteRouter = require("./src/routes/deleteRoutes")(nav);

app.use(express.urlencoded({
    extended: true,})
    );

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.use("/", homeRouter);
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/signUp',signUpRouter);
app.use('/logIn',logInRouter);
app.use("/addbook", addRouter);
app.use("/update", updateRouter);
app.use("/delete", deleteRouter);


app.listen(port,()=>{console.log("Server Ready at" + port)});