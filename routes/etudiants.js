var express = require('express');
var router = express.Router();

const { login, listeAssignment, searchAssignment, saveAssignment } = require('../services/etudiantService');

/* LISTE des ASSIGNMENTS d'un ETUDIANT [PAGINATION - ORDER BY - (Filtre rendu | non-rendu)] */
router.get('/:id/assignments', listeAssignment);

/* RECHERCHE par [ETUDIANT connecté] - MATIERE - DATE de CRÉATION - DATE de RENDU [PAGINATION] */
router.get('/:id/assignments/search', searchAssignment);

/* AJOUT D'UN NOUVEL ASSIGNMENT */
router.post('/:id/assignment', saveAssignment);

/* Login */
router.post('/login', login);

module.exports = router;