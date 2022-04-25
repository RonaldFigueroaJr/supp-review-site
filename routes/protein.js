const express = require('express');
const router = express.Router();
const proteinCtrl = require('../controllers/protein');
const isLoggedIn = require('../config/auth');

router.get('/', proteinCtrl.index);


module.exports = router;