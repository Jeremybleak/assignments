const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const PORT = process.env.PORT

app.use(express.json())

app.use('/score', require('./routes/score'))


mongoose.connect('mongodb://localhost:27017/personal-project', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: false,
    useUnifiedTopology: true
}).then(()=>{
    console.log('mongoose connected')
}).catch((err)=>{
    console.log(err)
})

app.listen(PORT, () =>{
    console.log(`server listening on port ${PORT}`)
})