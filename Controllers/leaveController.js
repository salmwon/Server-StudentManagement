const leaves = require('../Models/leaveModel')
//leave submit
exports.leaveSubmit = (req, res) => {
    console.log("Inside leaveSubmit API");
    const { fname, lname, regno, reason, days } = req.body
    const leaveDoc = req.file.filename
    console.log(fname, lname, regno, reason, days, leaveDoc);
    const leavereq = new leaves({
        fname, lname, regno, reason, days, leaveDoc
    })
    leavereq.save()
    res.status(200).json(leavereq)

}

//get leave at admin
exports.getallleave = async (req, res) => {
    try {
        const allleave = await leaves.find()
        res.status(200).json(allleave)
    } catch (err) {
        res.status(101).json(err)
    }
}

//delete leave
exports.removeleave=async(req,res)=>{
    const {pid}=req.params
    try{
        const deleteData=await leaves.findByIdAndDelete({_id:pid})
        res.status(200).json(deleteData)
    }catch(err){
        res.status(401).json(err)
    }
}