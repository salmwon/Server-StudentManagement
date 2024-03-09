const mongoose = require('mongoose')

const leaveSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    regno: {
        type: Number,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    days: {
        type: Number,
        required: true
    },
    leaveDoc: {
        type: String,
        required: true
    }

})

const leaves = mongoose.model("leaves", leaveSchema)
module.exports = leaves