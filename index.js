require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/routes')
require('./DB/connection')


const smServer = express()

smServer.use(cors())
smServer.use(express.json())
smServer.use(router)
smServer.use('/leaveuploads',express.static('./leaveuploads'))
const PORT = 3000

smServer.listen(PORT, () => {
    console.log(`student management server started at port: ${PORT}`);
})

smServer.get('/', (req, res) => {
    res.status(200).send("Student Management Server Started!!!")
})