var express = require('express');
var router = express.Router();

const { login } = require('../services/etudiantService');

/* Login */
router.post('/login', login);

module.exports = router;