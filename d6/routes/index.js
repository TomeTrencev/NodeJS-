const router = require("express").Router();

const {
    addNewPlanet,
    getAllPlanets,
    updatePlanet,
    deletePlanet
} = require("../controllers/planets");

const {
    addNewStar,
    getAllStars,
    updateStars,
    deleteStar
} = require("../controllers/stars")

router.post("/planet", addNewPlanet);
router.get("/planet", getAllPlanets);
router.put("/planet", updatePlanet);
router.delete("/planet", deletePlanet);

router.post("/star", addNewStar);
router.get("/star", getAllStars);
router.put("/star", updateStars);
router.delete("/star", deleteStar);

router.use((req, res) => {
    return res.status(404).json("Not Found!")
});




module.exports = router;