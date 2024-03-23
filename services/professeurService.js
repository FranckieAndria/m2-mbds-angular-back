const Professeur = require('../models/Professeur') ;
const { loginUser } = require('./userService');

/* LISTE des ASSIGNMENTS d'un PROFESSEUR [PAGINATION - par CATÉGORIE RENDU ou NON-RENDU] */

/* RECHERCHE par [PROFESSEUR connecté] - MATIERE - DATE de CRÉATION - DATE de RENDU [PAGINATION] */

/* METTRE UN ASSIGNMENT en RENDU (Envoyé un email à l'ETUDIANT) */

/* LISTE des MATIÈRES pour l'enregistrement d'un NOUVELL ASSIGNMENT */


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

module.exports = {
    login
} ;