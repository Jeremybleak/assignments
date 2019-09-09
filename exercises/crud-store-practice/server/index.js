const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 8655

app.use('/', express.json())
app.use('/store', require('./routes/storeRoutes'))

mongoose.connect('mongodb://localhost:27017/store-of-crud', {useNewUrlParser: true}).then(() =>{
    console.log('mongoose is connected')
})
.catch(err =>{
    console.log(err)
})

app.listen(PORT, () =>{
    console.log(`Port is listening on port ${PORT}`)
})