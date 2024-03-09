const mongoose = require("mongoose")


const announcementSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    announce:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    }
})

const announcements = mongoose.model('announcements', announcementSchema)
module.exports = announcements