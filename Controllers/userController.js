
const admins = require('../Models/adminModel');
const users = require('../Models/userModel')


exports.studentRegister = async (req, res) => {
    const { studentname, registerno, password } = req.body
    console.log("inside register request");
    //checking registerno already exists
    try {
        const existingUser = await users.findOne({ registerno })
        console.log(existingUser);
        if (existingUser) {
            res.status(406).json("User already exist")
        } else {
            const newUser = new users({
                studentname, registerno, password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (err) {
        res.status(401).json(err)
    }

}

exports.studentLogin = async (req, res) => {
    const { registerno, password } = req.body
    console.log("inside login request");

    try {
        const existingUser = await users.findOne({ registerno, password })
        console.log(existingUser);
        if (existingUser) {
            res.status(200).json({ existingUser })
        } else {
            res.status(406).json("Invalid RegisterNo / Password")
        }

    } catch (err) {
        res.status(401).json(err)
    }
}

//admin login

exports.adminLogin = async (req, res) => {
    const { email, password } = req.body
    console.log("inside adminlogin request");

    try {
        const existingAdmin = await admins.findOne({ email, password })
        console.log(existingAdmin);
        if (existingAdmin) {
            res.status(200).json({ existingAdmin })
        } else {
            res.status(406).json("Invalid email / Password")
        }

    } catch (err) {
        res.status(401).json(err)
    }
}