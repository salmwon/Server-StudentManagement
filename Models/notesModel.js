const mongoose = require("mongoose")


const notesSchema = new mongoose.Schema({
    notesDoc: {
        type: String,
        required: true
    }
})

const notes = mongoose.model('notes', notesSchema)
module.exports = notes