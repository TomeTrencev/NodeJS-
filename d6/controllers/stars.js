const Star = require ("../models/Star");

const addNewStar = async (req,res) =>{
    const {starName} = req.body;

if(!starName){
    return res.status(400).json("Missing Star name")
};
try {
    await Star.addStar({starName});
    return res.status(200).json("New Star id added")
} catch (error) {
    return res.status(500).json(error)
}
};


const getAllStars = async (req,res)=>{
    try {
        const allStars = await Star.getStar();
        return res.status(200).json(allStars)
    } catch (error) {
        return res.status(500).json(error);
    }

}

const updateStars = async (req,res)=>{
    const{id, starName}= req.body

    if(!id || !starName){
        return res.status(400).json("Missing data")
    }

    try {
        await Star.editStar({id, starName});
        return res.status(200).json("Star is updated !")
    } catch (error) {
        return res.status(500).json(error)
    }
}


const deleteStar = async (req,res)=>{
    const {id}= req.body;
    if(!id){
        return res.status(400).json("Greska ID")
    }

    try {
        await Star.deleteStar(id);
        return res.status(200).json("Star is deleted")
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {
    addNewStar,
    deleteStar,
    getAllStars,
    updateStars
}