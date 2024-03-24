const { ObjectId } = require('mongodb');
const Assignment = require('../models/Assignment');
const { sendMail } = require('./mailService');

/* LISTE de TOUS LES ASSIGNMENTS [ADMINISTRATEUR - PAGINATION] */




/* DETAILS D'UN ASSIGNMENT */
const details = async (req, res) => {
    const assignment = await Assignment.find({ _id: ObjectId(req.params.id) }).populate('professeur', 'nom prenom email matiere imagePath').populate('etudiant', 'nom prenom email niveau imagePath').exec();
    res.send({
        exists: assignment.length > 0,
        assignment: assignment,
        message: assignment.length > 0 ? 'Détails récupérés avec succès' : 'Assignment introuvable'
    });
};

/* MODIFICATION D'UN ASSIGNMENT (Si l'assignment est rendu => Envoyé un email à l'ETUDIANT) */
const updateAssignment = async (req, res) => {
    const result = await Assignment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (req.body.rendu == 'true') {
        const assign = await Assignment.findById(ObjectId(req.params.id)).populate('etudiant', 'email').populate('professeur', 'nom prenom matiere.intitule').exec();
        const professeur = assign.professeur.nom + ' ' + assign.professeur.prenom;
        sendMail(assign.etudiant.email, getEmailContent(req.body.titre, professeur, assign.professeur.matiere.intitule, parseInt(req.body.note), req.body.remarque));
    }
    res.send({
        updated: result != null,
        message: result != null ? 'Assignment modifié avec succès' : 'La modification a échoué',
        assignment: result
    });
};

function getEmailContent(titre, professeur, matiere, note, remarque) {
    const result = `Bonjour,<br><br>Pour votre information, votre assignment a été noté par votre professeur.<br>Voici plus de détails sur votre assignment : 
            <li><b>Titre : </b>` + titre + `</li>
            <li><b>Professeur : </b>` + professeur + `</li>
            <li><b>Matière : </b>` + matiere + `</li>
            <li><b>Note : </b>` + note + `</li>
            <li><b>Remarque : </b>` + remarque + `</li><br>Cordialement,` ;
    return result ;
}

/* SUPPRESSION D'UN ASSIGNMENT */
const deleteAssignment = async (req, res) => {
    const result = await Assignment.findByIdAndRemove(req.params.id);
    res.send({
        deleted: true,
        message: 'Assignment supprimé avec succès',
        assignment: result
    });
};

module.exports = {
    details, 
    deleteAssignment, 
    updateAssignment
};