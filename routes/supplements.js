const express = require('express');
const router = express.Router();
const supplementsCtrl = require('../controllers/supplements');
const isLoggedIn = require('../config/auth');

router.get('/', supplementsCtrl.index);
router.get('/new', isLoggedIn, supplementsCtrl.new);
router.post('/', isLoggedIn, supplementsCtrl.create);
router.get('/:id', supplementsCtrl.show);


module.exports = router;