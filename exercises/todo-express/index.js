// const express = require('express')
// const uuid = require('uuid/v4')
// const data = require('./data.json')
// const app = express()
// const PORT = 8383

// app.use('/', express.json())

// app.listen(PORT, () => {
// console.log(`listening on port ${PORT}`)
// })

// app.get('/todo', (req, res) => {
//     res.send(data)
// })

// app.get('/todo/:_id', (req, res) => {
//     const _id = req.params._id
//     const myThing = data.find(todo => todo._id === _id)
//     res.send(myThing)
// })

// app.post('/todo', (req, res) => {
//     const newTodo = req.body
//     newTodo._id = uuid()
//     data.push(newTodo)
//     res.send({
//         msg:'you did it',
//         newTodo
//     })
// })

// app.put('/todo/:_id', (req, res) => {
//     let updatedTodo = req.body
//     const _id = req.params._id
//     data.forEach(todo => _id === todo._id ? Object.assign(todo, updatedTodo) : todo)
//     res.send({
//         msg: 'updated'
//     })
// })

// app.delete('/todo/:_id', (req, res) => {
//     const _id = req.params._id
//     const index = data.findIndex(todo => todo._id === _id)
//     data.splice(index, 1)
//     res.send({
//         msg: 'deleted'
//     })
// })

const express = require('express')
const app = express()
const PORT = 8383

app.use('/', express.json())
app.use('/todo', require('./todoRoutes'))

app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`)
})