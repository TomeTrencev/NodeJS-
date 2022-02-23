const jwt = require('jsonwebtoken');

const createToken =  (username, id) =>{
   return  jwt.sign({username, id}, process.env.JWT_SECRET, {
       expiresIn:"2h"
   })
}

const tokenVerifier = (token) =>{
    return jwt.verify(token, process.env.JWT_SECRET)
}



module.exports = {createToken}
,tokenVerifier;