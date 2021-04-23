const {Router } = require('express');
const router = Router();
const auth = require('../middleware/auth');

const {uploadFile, newProduct, getProducts, showProduct, updateProduct, deleteProduct, searchProduct} = require('../controllers/products.controller');

router.route('/product', auth)
    .post(uploadFile, newProduct);
router.route('/product', auth)
    .get(getProducts);
router.route('/product/:idProduct', auth)
    .get(showProduct);
router.route('/product/:idProduct', auth)
    .put(updateProduct);
router.route('/product/:idProduct', auth)
    .delete(deleteProduct);
router.route('/product/search/:query', auth)
    .post(searchProduct);

module.exports = router;