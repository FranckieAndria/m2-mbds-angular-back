const mongoose = require('mongoose');
const Schema = mongoose.Schema ;
const ObjectId = require("mongodb").ObjectId ;

const mongoosePaginate = require('mongoose-aggregate-paginate-v2');

const AssignmentSchema = new Schema({
    titre: { type: String, required: true },
    etudiant: { type: ObjectId, ref: "Etudiant", required: true },
    professeur: { type: ObjectId, ref: "Professeur", required: true },
    dateDeCreation: { type: Date, required: true, default: Date.now },
    dateDeRendu: { type: Date, required: false },
    note: { type: Number, required: true, default: -1 },
    remarque: { type: String, required: false, default: '' },
    rendu: { type: Boolean, required: true, default: false }
}) ;

AssignmentSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Assignment", AssignmentSchema) ;