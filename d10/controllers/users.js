const bcrypt = require('bcrypt');
const User = require('../models/User');




const registerUser = async (req,res,next)=>{
    const {username,email,password} = req.body;

    if(!username || !email){
        return res.status(400).json("Insert Username and email")
    }
    if(!password || password.length<6){
        return res.status(400).json('password must be at leaset 6 characters!')
    }

    try {
        
        const encryptedPassword = await bcrypt.hash(password);
        await User.create({username,email, encryptedPassword});
        return res.status(201).json('User is created');
    } catch (error) {
        return res.status(500).json("User cannot be created!")
    }

};



const login = async (req,res,next) =>{
    const {username, password}= req.body;

    if(!username || !password){
        return res.status(400).json("missing username or password")
    }

    try{
        const user = await User.findOne({username});
        if(!user){
            return res.status(400).json("User does not exist!")
        }
        await bcrypt.compare(password, user.password);

        const token = createToke(user.username, user._id);
        return res.status(200).json(token);

    }catch(error){
        return res.status(500).json(error)
    }
}

module.exports = {
    login,
    registerUser
}