const {Router } = require('express');
const router = Router();

const {signup, signin} = require('../controllers/users.controller');

router.route('/signup')
    .post(signup);
router.route('/signin')
    .post(signin);

module.exports = router;