const Planet = require("../models/Planet");

const addNewPlanet = async (req,res) =>{
    const{planetName} = req.body;

    if(!planetName){
        return res.status(400).json("Missing planet name")
    }
    try {
        await Planet.addPlanet({planetName});
        return res.status(200).json("New Planet is added")
    } catch (error) {
        return res.status(500).json(error)
    }
};



const getAllPlanets = async (req,res)=>{
    try {
        const allPlanets = await Planet.getPlanets();
        return res.status(200).json(allPlanets)
    } catch (error) {
        return res.status(500).json(error);
    }
}


const updatePlanet = async (req,res)=>{
    const {id, planetName} = req.body;

    if(!id || !planetName){
        return res.status(400).json("Missing data")
    }

    try {
        await Planet.editPlanet({id, planetName});
        return res.status(200).json("Song is updated!")
    } catch (error) {
        return res.status(500).json(error)
    }
}


const deletePlanet = async (req,res)=>{
    const {id}= req.body;
    if(!id){
        return res.status(400).json("Greska ID")
    }

    try {
        await Planet.deletePlanet(id);
        return res.status(200).json("planet is deleted")
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {
    addNewPlanet,
    getAllPlanets,
    updatePlanet,
    deletePlanet

}