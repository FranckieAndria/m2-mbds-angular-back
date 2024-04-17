var express = require('express');
var router = express.Router();

const { login, listeMatiere, listeAssignment, updateProfesseur, listeEtudiants, details } = require('../services/professeurService');
const verifyToken = require('../services/tokenValidator');
const verifyAdmin = require('../services/adminValidator');

/* LISTE de tous les PROFESSEURS pour l'administrateur */
router.get('', verifyAdmin, listeMatiere);

/* LISTE des MATIÈRES pour l'enregistrement d'un NOUVELL ASSIGNMENT */
router.get('/matieres', listeMatiere);

/* DETAILS */
router.get('/assignments/details', verifyToken, details);

/* LISTE des ASSIGNMENTS d'un PROFESSEUR [PAGINATION - SORT - par CATÉGORIE RENDU ou NON-RENDU] */
router.get('/assignments', verifyToken, listeAssignment);

/* LISTE des ETUDIANTS */
router.get('/etudiants', verifyToken, listeEtudiants);

/* MODIFICATION */
router.put('/:id', verifyAdmin, updateProfesseur);

/* Login */
router.post('/login', login) ;

module.exports = router;