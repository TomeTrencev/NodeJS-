const Resident = require("../pkg/Resident");


const getAllResidents = async (req,res,next)=>{
    try {
       const allResidents = await Resident.find();
       return res.status(200).json(allResidents); 
    } catch (error) {
        return res.status(500).json(error)
    }
};

const createNewResident = async (req,res,next)=>{
    const {name,hasCar,isBoomer} = req.body;
    if(!name || !hasCar || !isBoomer ){
        return res.status(400).json("Invalid input, object invalid")
    };

    try {
        await Resident.create({name,hasCar,isBoomer});
        return res.status(201).json("New Resident is added")
    } catch (error) {
        return res.status(500).json(error)
    }
};


const updateResident = async (req,res,next) =>{
    const id = req.params.id;
    const{name,hasCar,isBoomer}= req.body;

    if(!name || !hasCar || !isBoomer){
        return res.stats(400).json("missing data")
    }

    try {
        await Resident.findByIdAndUpdate(id, {name, hasCar,isBoomer});
        return res.status(200).json("Resident is updated")
    } catch (error) {
        return res.status(500).json(error)
    }
}


const deleteResident = async (req,res,next) =>{
    const id = req.params.id

    try {
        await Resident.findByIdAndDelete(id);
        return res.status(200).json("Resident is deleted")
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {
    createNewResident,
    getAllResidents,
    updateResident,
    deleteResident
}

