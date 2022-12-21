const express=require('express')
const bodyParser=require('body-parser')
const mongoose = require('mongoose'); 
const todoRoutes=require('./routes/todo.js')
const cors=require('cors')
const app=express()

app.use(bodyParser.json())
app.use(cors())  // middleware dependencies

app.use('/todo',todoRoutes)

// logic to handler errors
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message});
  });
  // DB connection
mongoose
  .connect(
    // online mongo Atlas cluster url
    'mongodb+srv://@cluster0.cgdmlj0.mongodb.net/Todo?retryWrites=true&w=majority'
  )
  .then(result => {
    app.listen(8081);
  })
  .catch(err => console.log(err));