const Product = require('../models/Product');





const createProduct = async (req,res,next)=>{
    const { productName, productQuantity} = req.body;

    if( !productName || !productQuantity){
        return res.status(400).json('Please instert product name and quantity')
    }
    try {
        await Product.insertMany({productName, productQuantity});
        return res.status(201).json("product created !")
    } catch (error) {
        return res.status(500).json(error)
    }
}

const getAllProducts = async (req,res,next)=>{
    try {
        const allProducts = await Product.find();
        return res.status(200).json(allProducts)
    } catch (error) {
        return res.status(500).json(error)
    } 
}

const updateProduct = async (req,res,next)=>{
    const {productName, productQuantity}= req.body;
    if(!productName || !productQuantity){
        return res.status(400).json("Missing data!")
    }
    try {
        await Product.findByIdAndUpdate(_id,{
            productName,
            productQuantity
        })
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteProduct = async (req,res,next)=>{
    const _id = req.params._id;
    try {
        await Product.findByIdAndDelete(_id);
        return res.status(200).json(`Product with id: ${_id} was deleted`)
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {
    deleteProduct,
    createProduct,
    getAllProducts,
    updateProduct
}