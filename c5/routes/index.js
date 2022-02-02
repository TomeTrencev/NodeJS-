const router = require("express").Router();

router.get  ('/',(req, res)=>{
    return res
    .status(200)
    .json("Hello you are on Homepage")
});


router.post  ('/login',(req,res)=>{
    if(req.body.password){
        return res.status(200).json("Logged in")
    }
    
    return res.status(401).json("koj ti e paswordoto ?")
})



router.use ((req,res)=>{
    return res.status(404).json('Not Found bratce ');
});
module.exports = router;