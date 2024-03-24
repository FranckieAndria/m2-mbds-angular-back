var express = require('express');
var router = express.Router();

const { details, updateAssignment, deleteAssignment } = require('../services/assignmentService');

/* DETAILS D'UN ASSIGNMENT */
router.get('/:id', details) ;

/* MODIFICATION D'UN ASSIGNMENT (Si l'assignment est rendu => Envoyé un email à l'ETUDIANT) */
router.put('/:id', updateAssignment);

/* SUPPRESSION D'UN ASSIGNMENT */
router.delete('/:id', deleteAssignment);

module.exports = router;