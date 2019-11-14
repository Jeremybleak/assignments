const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 8767



app.use('/', express.json())


mongoose.connect('mongodb://localhost:27017/crud-store-numero-4', {useNewURLParser: true}).then(() =>{
    console.log('mongoose is connected')
})
    .catch(err =>{
        console.log(err)
    })


app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`)
})

