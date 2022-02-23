const bcrypt = require("bcrypt")
const User = require("../models/User");
const{
    
}= require("../middlewares/jwt")


const registerUser = async (req,res,next)=>{
    const {username, password} = req.body;
    if(!username || !password || password.length <6){
        if(!username){
            return res.status(400).json("Username must be protived")
        }
        if(!password || password.length <6){
            return res.status(400).json("Password must be 6 chart ")
        }

    }
    try {
        const encryptedPassword = await bcrypt.hash(
            password, 
            +process.env.SALT_ROUNDS);
        await User.create({username, password:encryptedPassword});
        return res.status(200).json("User Created")
    } catch (error) {
        return res.status(500).json("user could not be created")
    }
}

const changePasswrod = async (req,res,next)=>{
    const {username, password}= req.body;
    if(!password || password.length <6 ?? !username){
        res.status(400).json("invalid pass")
    }
    try {
        const user = await User.find({username});
        if(user.length <1){
            return res.status(400).json("user does not exist")
        }
        const encryptedPassword = await bcrypt.hash(password)
        await User.updateOne({username}, {username,})
    } catch (error) {
        return res.status(500).json("user could not be created")
    }
}


const deleteUser = async (req,res,next)=>{}

const login = async (req,res,next)=>{}

module.exports = {
    registerUser,
    changePasswrod,
    deleteUser,
    login,
}