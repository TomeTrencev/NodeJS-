const router = require("express").Router();

const swaggerUi = require("swagger-ui-express");

const apiSpecs = require("../homework.json");



router.use((req,res)=>{
    return res.status(404).json("the Page is not Found")
});

module.exports = router;