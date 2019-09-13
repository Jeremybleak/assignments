const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema ({
    item:{
        type: String,
        required: true
    },
    stock:{
        type: Number,
        required:true
    }
})

module.exports = mongoose.model('inventory', inventorySchema)