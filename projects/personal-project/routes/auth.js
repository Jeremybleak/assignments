const express = require('express')
const authRouter = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

authRouter.post('/signup', (req, res, next) =>{
    User.findOne({username: req.body.username}, (err, exsisitingUser)=>{
        if(err){
            res.status(500)
            return next(err)
        }if(exsisitingUser !== null){
            res.status(404)
            return next(Error('That Username Already Exsists!'))
        }
            const newUser = new User(req.body)
            newUser.save((err, user) => {
            if(err){
                res.status(500)
                return next(err)
            }
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(201).send({success:true, user: user.withoutPassword(), token})
        })
    })
})

authRouter.post('/login', (req, res, next) => {
    console.log(req.body)
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) =>{
        if(err){
            res.status(500)
            return next(err)
        }if(!user){
            res.status(403)
            return next(Error('Username or Password incorrect'))
        }
        user.checkPassword(req.body.password, (err, match) => {
            if(err) return res.status(500).send(err)
            if(!match) return res.status(401).send({success:false, message: 'Username or Password incorrect'})
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(200).send({token: token, user: user.withoutPassword(), success: true})
        })

    })
})

module.exports = authRouter