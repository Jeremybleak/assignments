const express = require('express')
const app = express()
const PORT = 8675


app.use('/', express.json())
app.use('/stuff', require('./stuffRoutes'))

app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`)
})