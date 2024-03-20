const Etudiant = require('../models/Etudiant') ;

// JWT - START
const jwt = require('jsonwebtoken') ;
const BCrypt = require('bcrypt') ;
const SECRET_KEY = "m2-mbds-angular" ;
// JWT - END

// LOGIN - START
const login = async (req, res) => {
    const email = req.body.email ;
    const password = req.body.password ;

    if (!email || !password) res.send({ 'error': 'Erreur d\'authentification', 'body': req.body }) ;
    else {
        const etudiant = await Etudiant.findOne({email: email}, {assignments: 0}).exec() ;
        if (etudiant) {
            const correctPassword = await BCrypt.compare(password, etudiant.password) ;
            if (correctPassword) {
                etudiant.password = '' ;
                let dateExpiration = new Date() ;
                dateExpiration.setMinutes(dateExpiration.getMinutes() + 30);
                const token = jwt.sign({ user: etudiant, dateLogin: new Date().toString(), dateExpiration: dateExpiration }, SECRET_KEY) ;
                res.send({token: token, logged: true, message: 'Authentication successful'}) ;
            }
        }
    }
} ;
// LOGIN - END