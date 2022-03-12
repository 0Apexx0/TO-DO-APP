
// require the liberary
const mongoose = require('mongoose')

// connect to the database
mongoose.connect('mongodb+srv://aditya:aditya123@cluster0.7kvvg.mongodb.net/todos_db');

// call to the cennection of database
const db =mongoose.connection;

// check for error
// if  error is present
db.on('error' , console.error.bind(console , 'error connecting to db'));

// if no error is present
db.once('open' , ()=>{
    console.log('successfully connected to the database!!!!!')
} );