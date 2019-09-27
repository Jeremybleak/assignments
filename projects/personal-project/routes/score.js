const express = require("express")
const scoreRoute = express.Router()
const Score = require('../models/score')


scoreRoute.route('/')

    .get((req, res, next) =>{
        Score.find({user: req.user._id}, (err, score) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.send(score)
        })
    })

    .post((req, res, next) =>{
        const score = new Score(req.body)
        score.user = req.user._id
        score.save((err, newScore) =>{
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(newScore)
        })
    })

scoreRoute.route('/:_id')

    .get((req, res, next) =>{
        Score.findOne({_id: req.params.id, user: req.user._id}, (err, score) =>{
            if(err){
            res.status(500) 
            return next(err)
            } else if(!score){
                res.status(404)
                return next(new Error ('Score Not Found'))
            }
            return res.send(score)
        })
    })

    .put((req, res, next) =>{
        Score.findOneAndUpdate({_id: req.params._id, user: req.user._id}, req.body, {new: true},
            (err, score) =>{
                if(err){
                    console.log('Error')
                    res.status(500)
                    return next(err)
                }
                return res.send(score)
            })
    })

    .delete((req, res, next) =>{
        Score.findOneAndRemove({_id: req.params._id, user: req.user._id}, (err, score) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.send({msg: 'the following score will be deleted:', score})
        })
    })

module.exports = scoreRoute