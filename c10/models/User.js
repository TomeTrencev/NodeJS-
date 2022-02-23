const mongoose = require("mongoose");

const User = mongoose.model('users', {
    username:{ type:String, index:true, unique:true},
    password:String,
})
    

module.exports = User;