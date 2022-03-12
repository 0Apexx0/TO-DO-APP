const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    info : {
        type : String,
        require : true
    }
});


const Todo = mongoose.model('Todo' , todoSchema);

module.exports = Todo;