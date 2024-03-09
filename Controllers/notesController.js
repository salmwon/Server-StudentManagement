const notes=require('../Models/notesModel')

exports.notesSubmit=(req, res) => {
    console.log("Inside notesSubmit API");
    const notesDoc = req.file.filename
    console.log(notesDoc);
    const notesUpload = new notes({
        notesDoc
    })
    notesUpload.save()
    res.status(200).json(notesUpload)

}

exports.getNotes=async (req, res) => {
    try {
        const allnotes = await notes.find()
        res.status(200).json(allnotes)
    } catch (err) {
        res.status(101).json(err)
    }
}