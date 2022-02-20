const router = require("express").Router();
const {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
}= require("../controllers/products");
const {
login,
registerUser
}=require('../controllers/users')
const {authMiddleware}= require("../middlewares/jwt");

const PREFIX = process.env.API_PREFIX;

router.post(PREFIX + '/register', registerUser);
router.post(PREFIX + '/login', login);
router.post(PREFIX + '/products',authMiddleware, createProduct );
router.get(PREFIX + ' /products',authMiddleware, getAllProducts);
router.put(PREFIX + '/products/:_id', authMiddleware,updateProduct);
router.delete(PREFIX + '/products/:_id',authMiddleware, deleteProduct)

router.use((req,res)=>{
    return res.status(404).json("Not Found!");
});

module.exports = router;

