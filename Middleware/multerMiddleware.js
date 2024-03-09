const multer = require('multer')

console.log("inside multer config");

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './leaveuploads')

    },
    filename: (req, file, callback) => {
        const filename = `pdf-${Date.now()}-${file.originalname}`
        callback(null, filename)
    }
})

const fileFilter = (req, file, callback) => {
    if (file.mimetype === "application/pdf") {
        callback(null, true)
    } else {
        callback(null, false)
        return callback(new Error("*Please Upload Files with following extensions pdf only*"))
    }
}

const multerConfig = multer({
    storage, fileFilter
})


module.exports=multerConfig