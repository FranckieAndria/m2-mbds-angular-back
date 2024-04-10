const Assignment = require('../models/Assignment');
const Etudiant = require('../models/Etudiant');

const { ObjectId } = require('mongodb');
const { loginUser } = require('./userService');
const { createPDF } = require('./pdfService');

/*************************************
* CONSTANT FOR ALL FUNCTIONS - START *
*************************************/
const MIN_DATE = "2000-01-01";
const MAX_DATE = "2100-12-31";
const DEFAULT_SORT = -1 ;

function getLookupProfesseur(pipeline) {
    return {
        from: 'professeurs',
        localField: 'professeur',
        foreignField: '_id',
        as: 'professeur',
        pipeline: pipeline
    };
}

function sendPaginatedResult(aggregateQuery, res, page, limit) {
    Assignment.aggregatePaginate(
        aggregateQuery,
        {
            page: parseInt(page) || 1,
            limit: parseInt(limit) || 10
        },
        (err, data) => {
            if (err) res.send(err);
            res.send(data);
        }
    );
}
/***********************************
* CONSTANT FOR ALL FUNCTIONS - END *
***********************************/



/********************
* FONCTIONS - START *
********************/
/* LISTE des ASSIGNMENTS d'un ETUDIANT [PAGINATION - SORT - (Filtre rendu | non-rendu)] */
const listeAssignment = async (req, res) => {
    const aggregateQuery = Assignment.aggregate();
    const renduQuery = parseInt(req.query.rendu) || 'all';
    const matching = renduQuery == 'all' ? { etudiant: ObjectId(req.params.id) } : { etudiant: ObjectId(req.params.id), rendu: renduQuery == 1 };
    aggregateQuery.match(matching);
    aggregateQuery.sort({ dateDeCreation: parseInt(req.query.tri) || DEFAULT_SORT });
    aggregateQuery.lookup(getLookupProfesseur([{ $project: { nom: 1, prenom: 1, email: 1, matiere: 1, imagePath: 1 } }]));
    sendPaginatedResult(aggregateQuery, res, req.query.page, req.query.limit);
};

/* RECHERCHE par [ETUDIANT connecté] - TITRE - MATIERE - DATE de CRÉATION - DATE de RENDU [PAGINATION] */
const searchAssignment = async (req, res) => {
    const titre = req.query.titre || '' ;
    const dateDeCreationInf = req.query.dateDeCreationInf || MIN_DATE;
    const dateDeCreationSup = req.query.dateDeCreationSup || MAX_DATE;
    const dateDeRenduInf = req.query.dateDeRenduInf || MIN_DATE;
    const dateDeRenduSup = req.query.dateDeRenduSup || MAX_DATE;
    const rendu = req.query.rendu || 0.
    let matiere = req.query.matiere;
    if (matiere == "Toutes les matières") matiere = "";
    const aggregateQuery = Assignment.aggregate();
    let matching = {
        professeur: { $ne: [] },
        etudiant: ObjectId(req.params.id),
        dateDeRendu: {$gte: new Date(dateDeRenduInf), $lte: new Date(dateDeRenduSup)},
        dateDeCreation: {$gte: new Date(dateDeCreationInf), $lte: new Date(dateDeCreationSup)}
    };
    if (titre != 'undefined') matching.titre = { $regex: new RegExp(titre, "i") } ;
    if (rendu != 0) matching.rendu = (rendu == 1);
    aggregateQuery.lookup(getLookupProfesseur([{$match: { "matiere.intitule": { $regex: new RegExp(matiere || '', "i") }}},{$project: { nom: 1, prenom: 1, email: 1, matiere: 1, imagePath: 1 }}]));
    aggregateQuery.match(matching);
    sendPaginatedResult(aggregateQuery, res, req.query.page, req.query.limit);
};

/* AJOUT D'UN NOUVEL ASSIGNMENT */
const saveAssignment = async (req, res) => {
    let assignment = new Assignment();
    assignment.titre = req.body.titre;
    assignment.etudiant = req.params.id;
    assignment.professeur = req.body.professeur;
    assignment.dateDeRendu = req.body.dateDeRendu;
    assignment.save((err) => {
        const result = {
            'saved': err ? false : true,
            'message': err ? 'Erreur lors de l\'enregistrement de l\'assignment' : 'Assignment enregistré avec succès'
        } ;
        res.send(result);
    });
};

/* RELEVÉ DES NOTES */
const releveNotes = async (req, res) => {
    const assignments = await Assignment.find({etudiant: ObjectId(req.params.id), rendu: true}).populate('professeur', 'nom prenom email matiere.intitule imagePath').sort({dateDeRendu: -1}).exec() ;
    res.send(assignments);
};

/* EXPORTATION PDF du RELEVÉ de NOTE d'un ETUDIANT */
const createReportCard = async (req, res) => {
    const assignments = await Assignment.find({etudiant: ObjectId(req.params.id), rendu: true}).populate('professeur', 'nom prenom email matiere.intitule').sort({dateDeRendu: -1}).exec() ;
    createPDF(res, assignments, req.params.id, req.query.nom, req.query.prenom, req.query.email, req.query.niveau);
}

/* MODIFICATION */
const updateEtudiant = async (req, res) => {
    const result = await Etudiant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send({
        updated: result != null,
        message: result != null ? 'Information(s) sur l\'étudiant modifiée(s) avec succès' : 'Erreur lors de la modification des informations sur l\'étudiant',
        etudiant: result
    });
};

// LOGIN - START
const login = async (req, res) => {
    const logFailed = {
        token: false,
        logged: false,
        message: 'Erreur d\'authentification',
        body: req.body
    };
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password) res.send(logFailed);
    else {
        const etudiant = await Etudiant.findOne({ email: email }).exec();
        if (etudiant) {
            const loginResult = await loginUser(password, etudiant, req);
            res.send(loginResult);
        } else res.send(logFailed);
    }
};
// LOGIN - END

/******************
* FONCTIONS - END *
******************/

module.exports = {
    login,
    listeAssignment,
    searchAssignment,
    saveAssignment,
    createReportCard, 
    releveNotes,
    updateEtudiant
};