const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    name:{
        required: true,
        type: String
    },
    price:{
        required: true,
        type: Number
    },
    type:{
        required: true,
        type: String
    },
    stock:{
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('inventory', inventorySchema)