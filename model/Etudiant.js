const mongoose = require('mongoose');
const Schema = mongoose.Schema ;
const ObjectId = require("mongodb").ObjectId ;

const EtudiantSchema = new Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    niveau: { type: String, required: true },
    imagePath: { type: String, required: true },
    assignments: [{
        titre: { type: String, required: true },
        professeur: { type: ObjectId, ref: "Professeur", required: true } ,
        dateDeCreation: { type: Date, required: true, default: Date.now } ,
        dateDeRendure: { type: Date, required: false } ,
        note: { type: Number, required: true, default: -1 } ,
        remarque: { type: string, required: false, default: '' } ,
        rendu: { type: Boolean, required: true, default: false }
    }]
}) ;

module.exports = mongoose.model("Etudiant", EtudiantSchema) ;