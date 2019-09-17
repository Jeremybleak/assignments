const express = require('express')
const todoRouter = express.Router()
const Todo = require('../models/todo')

todoRouter.route('/')

    .get((req, res) => {
        res.send('got')
    })

    .post((req, res) => {
        res.send('posted')
    })

todoRouter.route('/:_id')

    .get((req, res) => {
        res.send('got one')
    })

    .put((req, res) => {
        res.send('put')
    })

    .delete((req, res) => {
        res.send('deleted')
    })

module.exports = todoRouter