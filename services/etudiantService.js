const Assignment = require('../models/Assignment');
const Etudiant = require('../models/Etudiant') ;

const { ObjectId } = require('mongodb');
const { loginUser } = require('./userService') ;


/*************************************
* CONSTANTS FOR ALL FUNCTIONS - START *
*************************************/
const lookUpProfesseur = {
    from: 'professeurs',
    localField: 'professeur',
    foreignField: '_id',
    as: 'professeur',
    pipeline: [{$project: {nom: 1, prenom: 1, email: 1, matiere: 1, imagePath: 1}}]
} ;
/***********************************
* CONSTANTS FOR ALL FUNCTIONS - END *
***********************************/


/* LISTE des ASSIGNMENTS d'un ETUDIANT [PAGINATION - SORT - (Filtre rendu | non-rendu)] */
const listeAssignment = async (req, res) => {
    const aggregateQuery = Assignment.aggregate();
    const renduQuery = parseInt(req.query.rendu) || 'all' ;
    const matching = renduQuery == 'all' ? {etudiant: ObjectId(req.params.id)} : {etudiant: ObjectId(req.params.id),rendu: renduQuery == 1} ;
    aggregateQuery.match(matching);
    aggregateQuery.sort({dateDeRendu: parseInt(req.query.tri) || 1});
    aggregateQuery.lookup (lookUpProfesseur);

    Assignment.aggregatePaginate(
        aggregateQuery,
        {
            page: parseInt(req.query.page) || 1,
            limit: parseInt(req.query.limit) || 10
        } ,
        (err, data) => {
            if (err) res.send(err) ;
            res.send(data) ;
        }
    );
} ;

/* RECHERCHE par [ETUDIANT connecté] - MATIERE - DATE de CRÉATION - DATE de RENDU [PAGINATION] */
const searchAssignment = async (req, res) => {

} ;


/* AJOUT D'UN NOUVEL ASSIGNMENT */

/* EXPORTATION PDF du RELEVÉ de NOTE d'un ETUDIANT */



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
        const etudiant = await Etudiant.findOne({email: email}).exec() ;
        if (etudiant) {
            const loginResult = await loginUser(password, etudiant, req) ;
            res.send(loginResult) ;
        } else res.send(logFailed) ;
    }
} ;
// LOGIN - END

module.exports = {
    login,
    listeAssignment, 
    searchAssignment
} ;