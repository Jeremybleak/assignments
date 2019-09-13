const express = require('express')
const ServerRoute = express.Router()
const Inventory = require('../models/inventorySchema')

ServerRoute.route('/')

    .get((req, res) =>{
        Inventory.find((err, item) => {
            if(err) res.status(500).send(err)
            return res.status(200).send(item)
        })
    })

    .post((req, res) => {
        const newItem = new Inventory(req.body)
        newItem.save((err, item) => {
            if(err) res.status(500).send(err)
            return res.status(201).send(item)
        })
    })

ServerRoute.route('/:_id')

    .get((req, res) => {
        const _id = req.params._id
        Inventory.findById(_id, (err, item) =>{
            if(err) res.status(500).send(err)
            return res.status(200).send(item)
        })
    })

    .put((req, res) =>{
        const _id = req.params._id
        Inventory.findByIdAndUpdate(_id, req.body, {new:true}, (err, item) =>{
            if(err) res.status(500).send(err)
            return res.status(200).send(item)
        } )
    })

    .delete((req, res) => {
        const _id = req.params._id
        Inventory.findOneAndDelete(_id, (err, item) => {
            if(err) res.status(500).send(err)
            return res.status(200).send({
                msg: "the following item has been deleted",
                item
            })
        })
    })

module.exports = ServerRoute