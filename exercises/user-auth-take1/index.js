const express = require('express')
const app = express()
require('dotenv').config()
const expressJwt = require('express-jwt')
const mongoose = require('mongoose')
const PORT = 8765

app.use('/', express.json())
app.use('/api', expressJwt({secret: process.env.SECRET}))

app.use('/auth', require('./routes/auth'))
app.use('/api/todo', require('./routes/todo'))

mongoose.connect('mongodb://localhost:27017/todo-user-auth', {
    useNewUrlParser:true,
    useFindAndModify:true,
    useCreateIndex: false
})
.then(()=>{
    console.log('mongoose is connected')
}).catch((err)=>{
    console.log(err)
})
app.use((err, req, res, next) => {
    console.error(err)
    if(err.name === 'UnauthorizedError'){
        res.status(err.status)
    }
    return res.send({message: err.message})
})

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})