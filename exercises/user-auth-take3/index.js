const express = require('express')
const app = express()
require('dotenv').config();
const mongoose = require('mongoose')
const PORT = process.env.PORT 
const expressJwt = require('express-jwt')


app.use('/', express.json())
app.use('/api', expressJwt({secret: process.env.SECRET}))
app.use('/auth', require('./routes/auth'))
app.use('/api/todo', require('./routes/todo'))

mongoose.connect('mongodb://localhost:27017/user-auth-take3', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: false
}).then(() =>{
    console.log('mongoose is connected')
}).catch((err)=>{
    console.log(err)
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})