
const Product = require('../models/ProductModel')

module.exports = function(app){
    app.get('/products/:id',async(req,res)=>{
        try{
            const {id} = req.params
            const product = await Product.findById(id)
            res.status(200).json(product)
        }catch(error){
            console.log(error.message)
            res.status(500).json({message: error.message})
        }
    });

    app.get('/products',async(req,res)=>{
        try{
            const products = await Product.find({});
            res.status(200).json(products);
        }catch(error){
            console.log(error.message);
            res.status(500).json({message:error.message})
        }
    });
    app.post('/products',async(req,res)=>{
        try{
            const product = await Product.create(req.body);
            res.status(200).json(product)
        }catch(error){
            console.log(error.message);
            res.status(500).json({message:error.message})
        }
    });
    // update a product
    app.put('/products/:id',async(req,res)=>{
        try{
            const {id} = req.params;
            const product = await Product.findByIdAndUpdate(id,req.body);
            if(!product){
                return res.status(404).json({message:`canno find any product with ID ${id}`})
            }
            const prodUpdated = await Product.findById(id);
            res.status(200).json(prodUpdated);
        }catch(error){
            res.status(500).json({message:error.message})
        }
    });
    // Delete a Product
    app.delete('/products/:id',async(req,res)=>{
        try{
            const {id} = req.params;
            const product = await Product.findByIdAndDelete(id);
            if(!product){
                return res.status(404).json({message:`cannot delete any product with ID ${id}`})
            }
            res.status(200).json(product);
        }catch(error){
            res.status(500).json({message:error.message})
        }
    });

}