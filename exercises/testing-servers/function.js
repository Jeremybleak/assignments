const express = require('express')
const app = express()
const PORT = 8383


app.listen(PORT, () =>{
    console.log(`App is listening on port ${PORT}`)
})
app.use('/',express.json())

app.get('/', (req, res) => {
    console.log(req.body)
    res.send(' p o p c o r n')
})