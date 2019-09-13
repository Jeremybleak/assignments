const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 8675

app.use('/', express.json())

mongoose.connect('mongodb://localhost:27017/crud-store-3', 
{
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: false
}).then(() => {
    console.log('mongoose is connected yo')
}).catch(err =>{
    console.log(err)
})
 
app.use('/stuff', require('./routes/store'))

app.listen(PORT, () =>{
    console.log(`server is listening on ${PORT}`)
})