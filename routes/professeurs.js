var express = require('express');
var router = express.Router();

const { login } = require('../services/professeurService');

/* Login */
router.post('/login', login) ;

module.exports = router;