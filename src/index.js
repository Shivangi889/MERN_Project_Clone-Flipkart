const express = require('express');
// const env = require('dotenv');
const app =express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// environment variable or constants
// env.config();

// app.listen(process.env.PORT, () => {
//     console.log('Server is running on port ${process.env.PORT}');
// })


//mongodb connection
//mongodb+srv://root:<password>@cluster0.houot6k.mongodb.net/?retryWrites=true&w=majority
mongoose.connect('mongodb://127.0.0.1:27017/test',
// {
// useNewUrlParser: true,
// useUnifiedTopology: true
// }
);


app.use(bodyParser());

app.get('/',(req,resp, next) =>{
    resp.status(200).json({
        message: 'heelo from server'
    });
});

app.post('/data',(req,resp, next) =>{
    resp.status(200).json({
        message: req.body
    });
});

app.listen (6000, () => {
    console.log('Server is running on port ');
});