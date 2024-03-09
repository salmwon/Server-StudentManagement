const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    studentname: {
        type: String,
        required: true
    },
    registerno: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const users = mongoose.model('users', userSchema)
module.exports = users