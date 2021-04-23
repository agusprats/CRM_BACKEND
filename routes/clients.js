const {Router } = require('express');
const router = Router();
const auth = require('../middleware/auth');

const {createClient, getClients, showClient, updateClient, deleteClient} = require('../controllers/clients.controller');

router.route('/client', auth)
    .post(createClient);
router.route('/client', auth)
    .get(getClients);
router.route('/client/:idClient', auth)
    .get(showClient);
router.route('/client/:idClient', auth)
    .put(updateClient);
router.route('/client/:idClient', auth)
    .delete(deleteClient);



module.exports = router;
