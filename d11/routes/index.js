const router = require('express').Router();
const {
    getAllCars,
    addNewCar,
    getCarConsumption,
    allHybridCars,
    allWhiteCars
    
}= require("../controllers/cars")

const PREFIX = process.env.API_PREFIX;

router
.route(PREFIX + "/cars")
.get(getAllCars)
.post(addNewCar);

router.get(PREFIX + "/carconsumption" , getCarConsumption)
router.get(PREFIX + "/carsmodel" , allHybridCars)
router.get(PREFIX + "/whitecars",allWhiteCars)





router.use((req, res) => {
    return res.status(404).json('Not Found!');
  });
  
  module.exports = router;