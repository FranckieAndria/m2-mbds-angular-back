const Etudiant = require('../models/Etudiant') ;
const { loginUser } = require('./userService') ;

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
    login
} ;