var express = require('express');
var router = express.Router();

const { login, listeAssignment, searchAssignment, saveAssignment, createReportCard, releveNotes, updateEtudiant, homeInfo, homeInfoMatiere, allEtudiants } = require('../services/etudiantService');
const verifyToken = require('../services/tokenValidator');
const verifyAdmin = require('../services/adminValidator');

/* Liste de tous les étudiants pour l'Administrateur */
router.get('', verifyAdmin, allEtudiants);

/* Login */
router.post('/login', login);

/* HOME Info Stats */
router.get('/homestats', verifyToken, homeInfoMatiere);

/* HOME Info */
router.get('/home', verifyToken, homeInfo);

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
router.put('/:id', verifyAdmin, updateEtudiant);

module.exports = router;