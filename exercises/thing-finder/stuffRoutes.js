const express = require('express')
const data = require('./data.json')
const stuffRouter = express.Router()


stuffRouter.route('/')

    .get((req, res) => {
        if(req.query.type && req.query.price){
            const cost = data.filter(stuff => stuff.price <= parseInt(req.query.price))
            const type = cost.filter(stuff => stuff.type.toLowerCase() === req.query.type.toLowerCase())
            res.send(type)
        }else if (req.query.name){
            const name = data.filter(stuff => stuff.name.toLowerCase() === req.query.name.toLowerCase())
            res.send(name)
        }else if(req.query.price){
            const cost = data.filter(stuff => stuff.price <= parseInt(req.query.price.toLowerCase()))
            res.send(cost)
        } else if(req.query.type){
            const type = data.filter(stuff => stuff.type.toLowerCase()===req.query.type.toLowerCase())
            res.send(type)
        }else{
            res.send(data)
        }
    })

module.exports = stuffRouter