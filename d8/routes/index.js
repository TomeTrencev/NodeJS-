const router = require("express").Router();
const swaggerUI= require('swagger-ui-express');
const apiSpecs = require("../api-specs.json");
const{
getAllResidents,
createNewResident,
updateResident,
deleteResident
}= require("../handlers/residents")



const apiPrefix = process.env.API_PREFIX;

router.get(apiPrefix + '/residents', getAllResidents);
router.post(apiPrefix + '/residents', createNewResident);
router.put(apiPrefix +'/residents/:id',updateResident);
router.delete(apiPrefix + '/residents/:id',deleteResident)


router.use('api-docs',swaggerUI.serve);
router.get('api-docs',swaggerUI.setup(apiSpecs));

module.exports = router;