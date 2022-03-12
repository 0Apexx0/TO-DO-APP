const express = require('express');

const router = express.Router();
const todoController = require('../controller/todocontroller');
const Todo = require('../models/todo');

console.log("router loaded");



router.get('/', todoController.home);
router.get('/todo', (req , res)=>{
    return res.render('todo');
});


router.post('/create' , todoController.create)


module.exports = router;