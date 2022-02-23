const router = require('express').Router();

const {
changePasswrod,
deleteUser,
login,
registerUser
}= require("../controllers/users");

const PREFIX = process.env.API_PREFIX;

router.post(PREFIX + "/register", registerUser);
router.post(PREFIX + "/login", login);
router.put(PREFIX + "/change-password", changePasswrod);
router.delete(PREFIX + "/users/:userId", deleteUser);






router.use((req,res)=>{
    return res.status(404).json("error")

})

module.exports = router;