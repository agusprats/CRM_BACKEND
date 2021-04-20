const {Router } = require('express');
const router = Router();

const {newOrder, getOrders, showOrder, updateOrder, deleteOrder} = require('../controllers/orders.controller');

router.route('/order')
    .post(newOrder);
router.route('/order')
    .get(getOrders);
router.route('/order/:idOrder')
    .get(showOrder);
router.route('/order/:idOrder')
    .put(updateOrder);
router.route('/order/:idOrder')
    .delete(deleteOrder);

module.exports = router;