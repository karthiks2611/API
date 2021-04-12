const express = require('express');
const mongoose = require('mongoose');

const app = express();
require('dotenv/config');

const postsRoute = require('./routes/postfile');

//MiddleWares
app.use('/posts',postsRoute);

app.get('/',(req,res) => {
    res.send('We are on home!');
});


/*//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },()=> {
    console.log('Connected to DB!');
});*/


//How to listen to port??
app.listen(3000);