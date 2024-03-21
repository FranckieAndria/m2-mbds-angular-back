const mongoose = require('mongoose');
const Schema = mongoose.Schema ;
const ObjectId = require("mongodb").ObjectId ;

const AssignmentSchema = new Schema({
    titre: { type: String, required: true },
    etudiant: { type: ObjectId, ref: "Etudiant", required: true },
    professeur: { type: ObjectId, ref: "Professeur", required: true },
    dateDeCreation: { type: Date, required: true, default: Date.now },
    dateDeRendu: { type: Date, required: false },
    note: { type: Number, required: true, default: -1 },
    remarque: { type: string, required: false, default: '' },
    rendu: { type: Boolean, required: true, default: false }
})

module.exports = mongoose.model("Assignment", AssignmentSchema) ;