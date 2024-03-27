var express = require('express');
var router = express.Router();

const { login, listeAssignment, searchAssignment, saveAssignment, createReportCard, releveNotes, updateEtudiant } = require('../services/etudiantService');
const verifyToken = require('../services/tokenValidator');

/* Login */
router.post('/login', login);

/* LISTE des ASSIGNMENTS d'un ETUDIANT [PAGINATION - ORDER BY - (Filtre rendu | non-rendu)] */
router.get('/assignments', verifyToken, listeAssignment);

/* RECHERCHE par [ETUDIANT connecté] - MATIERE - DATE de CRÉATION - DATE de RENDU [PAGINATION] */
router.get('/assignments/search', verifyToken, searchAssignment);

/* AJOUT D'UN NOUVEL ASSIGNMENT */
router.post('/assignment', verifyToken, saveAssignment);

/* EXPORTATION PDF du RELEVÉ de NOTE d'un ETUDIANT */
router.get('/report', verifyToken, createReportCard);

/* RELEVE DES NOTES */
router.get('/releve', verifyToken, releveNotes);

/* MODIFICATION */
router.put('/:id', updateEtudiant);

module.exports = router;