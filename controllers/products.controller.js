const productCtrl = {};
const Product = require('../models/Product');
const multer = require('multer');
const shortid = require('shortid');

const configMulter = {
    storage: fileStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, __dirname+'../../uploads')
        },

        filename: (req, file, cb) => {
            const extension = file.mimetype.split('/')[1];
            cb(null, `${shortid.generate()}.${extension}`);
        }
    }),
    fileFilter(req, file, cb){
        if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
            cb(null, true);
        }else{
            cb(new Error('Invalid Format'))
        }
    },
}
//Paso configuracion y campo
const upload = multer(configMulter).single('image');

//Subo archivo
productCtrl.uploadFile = (req, res, next) => {
    upload(req, res, function(error) {
        if(error){
            res.json({message: error})
        }
        return next();
    })
}

productCtrl.newProduct = async (req, res, next) => {
    const product = new Product(req.body);
    
    try {
        if(req.file.filename){
            product.image = req.file.filename
        }
        await product.save();
            res.json({message: "New product added"}) 
            console.log(product)
    }catch(error) {
        res.json(error);
        next()}
};

productCtrl.getProducts = async (req, res, next) => { 
    try {
        const products = await Product.find({})
        res.json(products); 
    }
    catch(error) {
        console.log(error);
        next();
    }
};

productCtrl.showProduct = async (req, res, next) => { 
    const product = await Product.findById(req.params.idProduct);
    if(!product) {
        res.json({message: "No product to show"}); 
        return next()
    }
    res.json(product);
};

productCtrl.updateProduct = async (req, res, next) => {
    try{
        //Build new product
        let newProduct = req.body;

        //Verify if new image exists
        if(req.file){
            newProduct.image = req.file.filename;
        }else{
            let oldProduct = await Product.finById(req.params.idProduct);
            newProduct.image = oldProduct.image;
        }

        let product = await Product.findOneAndUpdate({_id: req.params.idProduct},newProduct, {
            new:true,
        });
        res.json(product)
    }catch(error){
        res.send(error);
        next();
    }
}

productCtrl.deleteProduct = async (req, res, next) => {
    try{
        await Product.findOneAndDelete({_id: req.params.idProduct});
        res.json({message: 'Product removed'});
    }catch(error){
        console.log(error);
        next();
    }
}
    
module.exports = productCtrl;