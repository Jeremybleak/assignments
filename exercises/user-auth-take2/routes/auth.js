const express = require('express')
const authRouter = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

authRouter.post('/signup', (req, res, next) => {
    User.findOne({username: req.body.username}, (err, existingUser) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(existingUser !== null){
            res.status(500)
            return next(new Error("That username already exsists! dum dum"))
        } 
        const newUser = new User (req.body)
        newUser.save((err, user) => {
            if(err){
                res.status(500)
                return next(err)
            }
            const token = jwt.sign(user.toObject(), process.env.SECRET)
            return res.status(201).send({success:true, user: user.toObject() , token})
        })
    })
})
authRouter.post('/login', (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(!user || user.password !== req.body.password){
            res.status(203)
            return next(new Error('incorrect username and/or password'))
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET)
        return res.send({token:token, user: user.toObject(), success: true})
    })
})

module.exports = authRouter