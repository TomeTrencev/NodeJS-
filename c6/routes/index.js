const router = require("express").Router();
const {
    addNewSongs,
    getAllSongs,
    updateSong,
    deleteSong
} = require("../controllers/songs");

router.post("/kafana",addNewSongs);
router.get("/kafana", getAllSongs);
router.put("/kafana", updateSong);
router.delete("/kafana",deleteSong);




router.use((req,res)=>{
    res.status(404).json("Not found.")
})

module.exports = router;