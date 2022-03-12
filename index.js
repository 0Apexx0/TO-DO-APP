const express = require('express');
const cookieParser = require('cookie-parser');
const port = 1000;
const app = express();

const db = require('./config/mongoose')

app.use(express.urlencoded());
app.use(cookieParser());

// setting up views 
app.set('view engine' , 'ejs');
app.set('views' , './views');


// static files like css javascript and images store here
app.use(express.static('./assets'));


// use express router
app.get('/' , require('./routes'));



// checking whether the server is running or not
app.listen(port, (err)=>{
    if(err){
        console.log('error found while connecting to the server' );
    }
    console.log(`server is up and ready to use @ http://localhost:${port}`);
})



