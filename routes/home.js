const express = require('express');
const router = express.Router();
const homeCtrl = require('../controllers/home');
const isLoggedIn = require('../config/auth');

router.get('/', homeCtrl.index);


module.exports = router;