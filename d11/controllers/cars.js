const Car = require("../model/Car");

const getAllCars = async (req, res, next) => {
    try {
        const allCars = await Car.find();
        return res.status(200).json(allCars)
    } catch (error) {
        return res.status(500).json(error)
    }
};

const addNewCar = async (req, res, next) => {
    const cars = req.body;

    if (!cars || cars.length < 1) {
        return res.status(400).json("Missing cars!")
    }
    try {
        await Car.insertMany(cars);
        return res.status(201).json("cars added !")
    } catch (error) {
        return res.status(500).json(error)
    }
}

const getCarConsumption = async (req, res, next) => {
    try {
        const carConsumption = await Car.aggregate()

            .match({

                l100kmh: { $gt: 3, $lt: 6 }
            })
        return res.status(200).json(carConsumption);
    } catch (error) {
        return res.status(500).json(error);
    }
}
const allHybridCars = async (req, res, next) => {
    try {
        const hybridCars = await Car.aggregate()
            .match({
                powerTrain: "hybrid"
            })
        return res.status(200).json(hybridCars);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const allWhiteCars = async (req,res,next)=>{
    try {
        const whiteCars = await Car.aggregate()
        .match({
            color:"white",
            l100kmh:{$lt:6}
        })
        return res.status(200).json(whiteCars)
    } catch (error) {
        return res.status(500).json(error);
    }
}




module.exports = {
    getAllCars,
    addNewCar,
    getCarConsumption,
    allHybridCars,
    allWhiteCars

}