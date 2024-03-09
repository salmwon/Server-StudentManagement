const announcements=require('../Models/announcementModel')

exports.postAnnouncement = async (req, res) => {
    console.log("Inside post announcement API");
    const { subject,announce,time} = req.body
    console.log(subject,announce,time);
    const postannounce = new announcements({
        subject,announce,time:new Date()
    })
    await postannounce.save()
    res.status(200).json(postannounce)

}

exports.getAnnouncement=async (req, res) => {
    try {
        const allannounce = await announcements.find()
        res.status(200).json(allannounce)
    } catch (err) {
        res.status(101).json(err)
    }
}

//delete announcement
exports.removeannounce=async(req,res)=>{
    const {pid}=req.params
    try{
        const deleteData=await announcements.findByIdAndDelete({_id:pid})
        res.status(200).json(deleteData)
    }catch(err){
        res.status(401).json(err)
    }
}