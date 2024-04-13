var express = require('express');
var router = express.Router();

const { login, listeMatiere, listeAssignment, updateProfesseur, listeEtudiants, details } = require('../services/professeurService');
const verifyToken = require('../services/tokenValidator');

/* LISTE des MATIÈRES pour l'enregistrement d'un NOUVELL ASSIGNMENT */
router.get('/matieres', listeMatiere);

/* DETAILS */
router.get('/assignments/details', verifyToken, details);

/* LISTE des ASSIGNMENTS d'un PROFESSEUR [PAGINATION - SORT - par CATÉGORIE RENDU ou NON-RENDU] */
router.get('/assignments', verifyToken, listeAssignment);

/* LISTE des ETUDIANTS */
router.get('/etudiants', verifyToken, listeEtudiants);

/* MODIFICATION */
router.put('/:id', updateProfesseur);

/* Login */
router.post('/login', login) ;

module.exports = router;