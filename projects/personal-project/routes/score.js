const express = require("express")
const scoreRoute = express.Router()
const Score = require('../models/score')


scoreRoute.route('/')

    .get((req, res, next) =>{
        res.send('got dem scores')
    })

    .post((req, res, next) =>{
        res.send('posted dat score')
    })

scoreRoute.route('/:_id')

    .get((req, res, next) =>{
        res.send('got one score doe')
    })

    .put((req, res, next) =>{
        res.send('updated dat score boi')
    })

    .delete((req, res, next) =>{
        res.send('that score is gone boy')
    })

module.exports = scoreRoute