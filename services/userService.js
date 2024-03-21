// IMPORTATION - START
const jwt = require('jsonwebtoken') ;
const BCrypt = require('bcrypt') ;
const SECRET_KEY = "m2-mbds-angular" ;
// IMPORTATION - END

const login = async (inputPassword, user, req) => {
    const correctPassword = await BCrypt.compare(inputPassword, user.password) ;
    if (correctPassword) {
        user.password = '' ;
        let dateExpiration = new Date() ;
        dateExpiration.setMinutes(dateExpiration.getMinutes() + 30);
        const token = jwt.sign({ user: user, dateLogin: new Date().toString(), dateExpiration: dateExpiration }, SECRET_KEY) ;
        return {
            token: token,
            logged: true,
            message:'Authentification réussie',
            body: req.body
        } ;
    } else {
        return {
            token: false, 
            logged: false, 
            message: 'Erreur d\'authentification', 
            body: req.body 
        } ;
    }
}

module.exports = {
    login
} ;