var express = require('express');
const verifyAdmin = require('../services/adminValidator');
var router = express.Router();
const { home } = require('../services/adminService');

router.get('/checker', verifyAdmin, (req, res) => {
    res.status(200).json({
        connected: true,
        admin: true
    });
});

router.get('/home',verifyAdmin,home);

module.exports = router;