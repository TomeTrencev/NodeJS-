const router = require ("express").Router();

router.get  ("/home",(req, res)=>{
      return res
      .status(200)
      .json("WELCOME ON MY PAGE!")
});

router.post  ("/register", (req, res)=>{
    if(req.body.password && req.body.username){
        return res.status(201).json("You are Logged in")
    }
    return res.status(401).json("What is your password")
})

router.use ((req, res)=>{
    return res.status(404).json("not found!")
})





module.exports = router;