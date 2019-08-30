const express = require('express')
const todoRoute = express.Router()
const uuid = require('uuid/v4')
const data = require('./data.json')



todoRoute.route('/')

    .get((req, res) => {
        res.send(data)
    })
    .post((req, res) => {
        req.body._id = uuid
        data.push(req.body)
        res.send({
            msg: 'you cool dog'
        })
    })
todoRoute.route('/:_id')
    .get((req, res) => {
            const _id = req.params._id
            const myTodo = data.find(todo => todo._id === _id)
            res.send(myTodo)
    })


    .delete((req, res) => {
        const _id = req.params._id
        const index = data.findIndex(todo => todo._id === _id)
        data.splice(index, 1)
        res.send({
            msg: 'its garbage now'
        })
    })
    .put((req, res) => {
        let updatedTodo = req.body
        const _id = req.params._id
        data.forEach(todo => todo._id === _id ? Object.assign(todo, updatedTodo) : todo )
        app.send({
            msg: 'updated!'
        })
    })

    module.exports = todoRoute