const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const PORT = process.env.PORT

app.use('/', express.json())

app.use('/todo', require('./routes/todo'))

mongoose.connect('mongodb://localhost:27017/todo-user-auth-2', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: false
}).then(()=>{
    console.log('mongoose is connected')
}).catch((err)=>{
    console.log(err)
})

app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`)
})