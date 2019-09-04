const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 8675

app.use('/', express.json())
app.use('/inventory', require('./routers/storeRoutes'))

mongoose.connect('mongodb://localhost:27017/crud-store', {useNewUrlParser: true}).then(() => {
    console.log(`mongoose is connected`)
}) 
    .catch(err =>{
        console.log(err)
    })

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})