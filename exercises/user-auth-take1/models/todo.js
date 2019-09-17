const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
    title:{
        required: true,
        type: String
    },
    completed:{
    type: Boolean,
    default: false
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model('Todo', todoSchema)