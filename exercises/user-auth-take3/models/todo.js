const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
    title:{
        required:true,
        type: String
    },
    completed:{
        type: Boolean,
        default:false
    },
    user:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
})

module.exports = mongoose.model('Todo', todoSchema)