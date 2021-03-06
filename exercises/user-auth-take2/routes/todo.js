const express = require('express')
const todoRouter = express.Router()
const Todo = require('../models/todo')

todoRouter.route('/')

    .get((req, res, next) => {
        Todo.find({user: req.user._id}, (err, todo) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.send(todo)
        })
    })

    .post((req, res, next) => {
        const newTodo = new Todo(req.body)
        newTodo.user = req.user._id
        newTodo.save((err, todo) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(newTodo)
        })
    })

todoRouter.route('/:_id')

    .get((req, res, next) => {
        Todo.findOne({_id:req.params._id, user: req.user._id}, (err, todo) =>{
            if(err){
                res.status(500)
                return next(new Error('todo item not found!'))
            }
            return res.send(todo)
        })
    })

    .put((req, res, next) => {
        Todo.findOneAndUpdate({_id: req.params._id, user: req.user._id}, req.body, {new: true}, (err, todo) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.send(todo)
        })
    })

    .delete((req, res, next) => {
        Todo.findByIdAndRemove({_id: req.params._id, user: req.user._id}, (err, todo) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.send({msg: "the following was deleted", todo})
        })
    })

module.exports = todoRouter