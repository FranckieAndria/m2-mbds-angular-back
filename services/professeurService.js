const Assignment = require('../models/Assignment');
const Professeur = require('../models/Professeur') ;

const { ObjectId } = require('mongodb');
const { loginUser } = require('./userService');

/*************************************
* CONSTANT FOR ALL FUNCTIONS - START *
*************************************/
const MIN_DATE = "2000-01-01";
const MAX_DATE = "2100-12-31";
const DEFAULT_SORT = -1 ;

function getLookupEtudiant(pipeline) {
    return {
        from: 'etudiants',
        localField: 'etudiant',
        foreignField: '_id',
        as: 'etudiant',
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
/* A propos pour la Home page */
const home = async (req, res) => {
    let selector = {
        professeur: ObjectId(req.params.id)
    };
    const total = await Assignment.countDocuments(selector).exec();
    selector.rendu = true;
    const rendu = await Assignment.countDocuments(selector).exec();
    selector.rendu = false;
    const non_rendu = await Assignment.countDocuments(selector).exec();
    const professeur = await Professeur.find({ _id: ObjectId(req.params.id) }).select("nom prenom email matiere").exec();

    const result = {
        total: total || 0,
        rendu: rendu || 0,
        non_rendu: non_rendu || 0,
        professeur: professeur
    };
    res.send(result);
};

/* DETAILS | ASSIGNMENTS D'UN ETUDIANT */
const details = async (req, res) => {
    const titre = req.query.titre || '' ;
    const rendu = req.query.rendu || 0;
    const aggregateQuery = Assignment.aggregate();
    let matching = {
        professeur: ObjectId(req.params.id),
    };
    if (req.query.etudiant) matching.etudiant = ObjectId(req.query.etudiant);
    if (titre != 'undefined') matching.titre = { $regex: new RegExp(titre, "i") };
    if (rendu != 0) matching.rendu = (rendu == 1);
    aggregateQuery.match(matching);
    aggregateQuery.lookup(getLookupEtudiant([{ $project: { nom: 1, prenom: 1, email: 1, imagePath: 1 } }]));
    sendPaginatedResult(aggregateQuery, res, req.query.page, req.query.limit);
};

/* LISTE des ETUDIANTS EN relation avec ce professeur */
const listeEtudiants = async (req, res) => {
    const aggregateQuery = Assignment.aggregate();
    const matching = { professeur: ObjectId(req.params.id) } ;
    const grouping = { 
        _id: {
            etudiant: "$etudiant", 
            professeur: "$professeur"
        }, 
        total: {
            "$sum": 1 
        }
    } ;
    aggregateQuery.match(matching);
    aggregateQuery.group(grouping);
    aggregateQuery.lookup({
        from: 'etudiants',
        localField: '_id.etudiant',
        foreignField: '_id',
        as: 'etudiantDetails',
        pipeline: [{ $project: { nom: 1, prenom: 1, email: 1, imagePath: 1 } }]
    });

    sendPaginatedResult(aggregateQuery, res, req.query.page, req.query.limit);
};

/* LISTE des ASSIGNMENTS d'un PROFESSEUR [PAGINATION - SORT - par CATÉGORIE RENDU ou NON-RENDU] */
const listeAssignment = async (req, res) => {
    const aggregateQuery = Assignment.aggregate();
    const renduQuery = parseInt(req.query.rendu) || 'all';
    const matching = renduQuery == 'all' ? { professeur: ObjectId(req.params.id) } : { professeur: ObjectId(req.params.id), rendu: renduQuery == 1 };
    aggregateQuery.match(matching);
    aggregateQuery.sort({ dateDeRendu: parseInt(req.query.tri) || DEFAULT_SORT });
    aggregateQuery.lookup(getLookupEtudiant([{ $project: { nom: 1, prenom: 1, email: 1, imagePath: 1 } }]));
    sendPaginatedResult(aggregateQuery, res, req.query.page, req.query.limit);
};

/* RECHERCHE par [PROFESSEUR connecté] - MATIERE - DATE de CRÉATION - DATE de RENDU [PAGINATION] */

/* LISTE des MATIÈRES pour l'enregistrement d'un NOUVELL ASSIGNMENT */
const listeMatiere = async (req, res) => {
    const professeurs = await Professeur.find().select('nom prenom email matiere.intitule imagePath').exec();
    res.send(professeurs);
};

/* MODIFICATION */
const updateProfesseur = async (req, res) => {
    const result = await Professeur.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send({
        updated: result != null,
        message: result != null ? 'Information(s) sur le professeur modifiée(s) avec succès' : 'Erreur lors de la modification des informations sur le professeur',
        professeur: result
    });
};

// LOGIN - START
const login = async (req, res) => {
    const logFailed = {
        token: false, 
        logged: false, 
        message: 'Erreur d\'authentification', 
        body: req.body 
    } ;
    const email = req.body.email ;
    const password = req.body.password ;
    if (!email || !password) res.send(logFailed) ;
    else {
        const professeur = await Professeur.findOne({email: email}).exec() ;
        if (professeur) {
            const loginResult = await loginUser(password, professeur, req) ;
            res.send(loginResult) ;
        } else res.send(logFailed) ;
    }
} ;
// LOGIN - END
/*****************
* FONCTIONS - EN *
*****************/

module.exports = {
    login, 
    listeMatiere,
    listeAssignment,
    updateProfesseur,
    listeEtudiants,
    details,
    home
} ;