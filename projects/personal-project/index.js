const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 8479

app.use(express.json())
app.use('/api', expressJwt({secret: process.env.SECRET}))

app.use('/auth', require('./routes/auth'))
app.use('/api/score', require('./routes/score'))

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

app.use((err, req, res, next) =>{
    console.error(err)
    if(err.name ==='UnauthorizedError'){
        res.status(err.status)
    }
    return res.send({message: err.message})
})

app.listen(PORT, () =>{
    console.log(`server listening on port ${PORT}`)
})