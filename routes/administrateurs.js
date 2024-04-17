var express = require('express');
const verifyAdmin = require('../services/adminValidator');
var router = express.Router();

router.get('/checker', verifyAdmin, (req, res) => {
    res.status(200).json({
        connected: true,
        admin: true
    });
});

module.exports = router;