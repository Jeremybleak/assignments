const express = require('express')
const app = express()
const PORT = 8888
const mongoose = require('mongoose')

app.use('/', express.json())
app.use('/bounties', require('./routes/BountyRoutes'))

mongoose.connect('mongodb://localhost:27017/bounty-hunter', {useNewUrlParser:true})
    .then(()=>{
        console.log('mongoose is running')
    })
    .catch(err =>{
        console.log(err)
    })

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})
