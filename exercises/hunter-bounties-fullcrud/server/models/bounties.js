const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
    firstName: {
        required: true,
        type: String
    },
    lastName:{
        required:true,
        type: String
    },
    living:{
        default: true,
        type: Boolean
    },
    bountyAmmount:{
        required: true,
        type: Number
    },
    type:{
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Bounties', bountySchema)