const {Router } = require('express');
const router = Router();

const {uploadFile, newProduct, getProducts, showProduct, updateProduct, deleteProduct, searchProduct} = require('../controllers/products.controller');

router.route('/product')
    .post(uploadFile, newProduct);
router.route('/product')
    .get(getProducts);
router.route('/product/:idProduct')
    .get(showProduct);
router.route('/product/:idProduct')
    .put(updateProduct);
router.route('/product/:idProduct')
    .delete(deleteProduct);
router.route('/product/search/:query')
    .post(searchProduct);

module.exports = router;