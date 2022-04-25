const express = require('express');
const router = express.Router();
const bcaaCtrl = require('../controllers/bcaa');
const isLoggedIn = require('../config/auth');

router.get('/', bcaaCtrl.index);


module.exports = router;