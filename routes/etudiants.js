var express = require('express');
var router = express.Router();

const { login, listeAssignment } = require('../services/etudiantService');

/* LISTE des ASSIGNMENTS d'un ETUDIANT [PAGINATION - ORDER BY - (Filtre rendu | non-rendu)] */
router.get('/:id/assignments', listeAssignment);

/* Login */
router.post('/login', login);

module.exports = router;