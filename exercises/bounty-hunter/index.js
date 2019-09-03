const express = require('express')
const uuid = require('uuid/v4')
const app = express()
const data = require('./data.json')
const PORT = 8675

app.use('/', express.json())

app.get('/bounties', (req, res) =>{
    res.send(data)
})
app.get('/bounties/:_id', (req, res) =>{
    const _id = req.params._id
    const myBounty = data.find(bounty => bounty._id === _id)
    app.send(myBounty)
})

app.post('/bounties', (req, res) =>{
    req.body._id = uuid
    data.push(req.body)
    res.send({
        msg: "new target pinned to board"
    })
})


app.delete('/bounties/:_id', (req, res) =>{
    const _id = req.params._id
    const index = data.findIndex(bounty => bounty._id === _id)
    data.splice(index, 1)
    app.send({
        msg:'removed bounty from board'
    })
})

app.put('/bounties/:_id', (req,res) => {
    let updatedBounty = req.body
    const _id = req.params._id
    data.forEach(bounty => bounty._id === _id ? Object.assign(bounty, updatedBounty): bounty )
    app.send({
        msg: "board Updated",
        updatedBounty
    })
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})