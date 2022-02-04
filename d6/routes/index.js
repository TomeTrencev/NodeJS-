const router = require("express").Router();

const{
    addNewPlanet,
    getAllPlanets,
    updatePlanet,
    deletePlanet
}=require("../controllers/planets");

router.post("/planet",addNewPlanet);
router.get("/planet", getAllPlanets);
router.put("/planet",updatePlanet);
router.delete("/planet",deletePlanet);

router.use((req,res)=>{
    return res.status(404).json("Not Found!")
});




module.exports= router;