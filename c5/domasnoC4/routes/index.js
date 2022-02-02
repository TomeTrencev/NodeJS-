const router = require("express").Router();
const path = require ("path");
const fileSystemOps = require('../fileSystem');

const pathTofile = path.join(__dirname,"Sample.txt");

router.post("/file",(req,res)=>{
     const data = req.body.data 
     fileSystemOps(pathTofile, data)
     .then((dataFromOperation)=>{
          return res.status(200).json(dataFromOperation)
     })
     .catch((err)=>{
          return res.status(500).json(err)
     })
})
router.get("/file",(req,res)=>{

})


module.exports = router;