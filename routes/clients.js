const {Router } = require('express');
const router = Router();

const {createClient, getClients, showClient, updateClient, deleteClient} = require('../controllers/clients.controller');

router.route('/client')
    .post(createClient);
router.route('/client')
    .get(getClients);
router.route('/client/:idClient')
    .get(showClient);
router.route('/client/:idClient')
    .put(updateClient);
router.route('/client/:idClient')
    .delete(deleteClient);



module.exports = router;
