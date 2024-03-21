const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfesseurSchema = Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    imagePath: { type: String, required: false },
    role: { type: String, required: true },
    matiere: {
        intitule: { type: String, required: true },
        imagePath: { type: String, required: false }
    }
});

module.exports = mongoose.model('Professeur', ProfesseurSchema) ;