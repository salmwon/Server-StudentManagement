const express = require('express')
const userController = require('../Controllers/userController')
const leaveController=require('../Controllers/leaveController')
const multerConfig = require('../Middleware/multerMiddleware')
const notesController=require('../Controllers/notesController')
const announcementController=require('../Controllers/announcementController')
const router = express.Router()


//route for student register
router.post('/studentregister', userController.studentRegister)

//route for student login
router.post('/studentlogin',userController.studentLogin)

//route for admin login
router.post('/adminlogin',userController.adminLogin)

//route for leave submit
router.post('/leavesubmit',multerConfig.single('leaveDoc'),leaveController.leaveSubmit)

//route for get allleave
router.get('/allleave',leaveController.getallleave)

//route to remove leave
router.delete('/leave/remove/:pid',leaveController.removeleave)

//route to upload notes
router.post('/notesupload',multerConfig.single('notesDoc'),notesController.notesSubmit)

//route for get allnotes
router.get('/allnotes',notesController.getNotes)

//route for announcement publish
router.post('/postannouncement',announcementController.postAnnouncement)

//route to get announcement
router.get('/getannouncement',announcementController.getAnnouncement)

//route to remove announcement
router.delete('/announcement/remove/:pid',announcementController.removeannounce)

module.exports = router