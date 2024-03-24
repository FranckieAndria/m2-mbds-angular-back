var express = require('express');
var router = express.Router();

const { login, listeMatiere, listeAssignment, updateProfesseur } = require('../services/professeurService');

/* LISTE des MATIÈRES pour l'enregistrement d'un NOUVELL ASSIGNMENT */
router.get('/matieres', listeMatiere);

/* LISTE des ASSIGNMENTS d'un PROFESSEUR [PAGINATION - SORT - par CATÉGORIE RENDU ou NON-RENDU] */
router.get('/:id/assignments', listeAssignment);

/* MODIFICATION */
router.put('/:id', updateProfesseur);

/* Login */
router.post('/login', login) ;

module.exports = router;