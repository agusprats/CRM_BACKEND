const {Router } = require('express');
const router = Router();
const auth = require('../middleware/auth');

const {newOrder, getOrders, showOrder, updateOrder, deleteOrder} = require('../controllers/orders.controller');


router.route('/order/new/:idClient', auth)
    .post(newOrder);
router.route('/order', auth)
    .get(getOrders);
router.route('/order/:idOrder', auth)
    .get(showOrder);
router.route('/order/:idOrder', auth)
    .put(updateOrder);
router.route('/order/:idOrder', auth)
    .delete(deleteOrder);

module.exports = router;