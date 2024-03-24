var express = require('express');
var router = express.Router();

const { login, listeAssignment, searchAssignment, saveAssignment, createReportCard, releveNotes, updateEtudiant } = require('../services/etudiantService');

/* LISTE des ASSIGNMENTS d'un ETUDIANT [PAGINATION - ORDER BY - (Filtre rendu | non-rendu)] */
router.get('/:id/assignments', listeAssignment);

/* RECHERCHE par [ETUDIANT connecté] - MATIERE - DATE de CRÉATION - DATE de RENDU [PAGINATION] */
router.get('/:id/assignments/search', searchAssignment);

/* AJOUT D'UN NOUVEL ASSIGNMENT */
router.post('/:id/assignment', saveAssignment);

/* EXPORTATION PDF du RELEVÉ de NOTE d'un ETUDIANT */
router.get('/:id/report', createReportCard);

/* RELEVE DES NOTES */
router.get('/:id/releve', releveNotes);

/* MODIFICATION */
router.put('/:id', updateEtudiant);

/* Login */
router.post('/login', login);

module.exports = router;