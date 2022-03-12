const Todo = require("../models/todo");

    

// fecting the todos info while starting the server at home page
module.exports.home = (req , res)=>{

    Todo.find({} , (err , todo)=>{
        if(err){
            console.log(`error found while fetching info : ${err}`);
            return;
        }
        return res.render('home' , {
            title : "To-Do List",
            todos : todo
        });

    })

};

module.exports.create = (req , res)=>{
    Todo.create({
        info : req.body.info
    }, (err , newTodo)=>{
        if(err){
            console.log(`error found while creating info : ${err}`);
            return;
        }
        
        console.log(`********** ${newTodo}`);
        return res.redirect('back');
    } )
};

module.exports.todo = (req , res)=>{
    return res.render('todo' ,{
        title : "todo"
    })
}
