const Professeur = require('../models/Professeur') ;
const { loginUser } = require('./userService');

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