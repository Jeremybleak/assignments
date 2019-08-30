const express = require('express')
const app = express()
const PORT = 8383

app.listen(PORT, () => {
    console.log(`running on ${PORT}`)
})
app.use('/',express.json())

app.get('/', (req, res) =>{
    console.log(req.body)
    res.send(' your mom')
})

app.post('/', (req, res) => {
    
})