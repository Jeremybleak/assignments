const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
    username:{
        required: true,
        type: String,
        lowercase: true
    },
    password:{
        required: true,
        type: String
    },
    isAdmin:{
        default: false,
        type: Boolean
    }
})

module.exports = mongoose.model('User', userSchema)