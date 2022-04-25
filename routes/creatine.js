const express = require('express');
const router = express.Router();
const creatineCtrl = require('../controllers/creatine');
const isLoggedIn = require('../config/auth');

router.get('/', creatineCtrl.index);


module.exports = router;