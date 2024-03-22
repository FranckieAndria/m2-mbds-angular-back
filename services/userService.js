// IMPORTATION - START
const jwt = require('jsonwebtoken') ;
const BCrypt = require('bcrypt') ;
const SECRET_KEY = "m2-mbds-angular" ;
// IMPORTATION - END

const loginUser = async (inputPassword, user, req) => {
    const correctPassword = await BCrypt.compare(inputPassword, user.password) ;
    if (correctPassword) {
        user.password = '' ;
        let dateExpiration = new Date() ;
        dateExpiration.setMinutes(dateExpiration.getMinutes() + 30);
        const tokenContent = { user: user, dateLogin: new Date(), dateExpiration: dateExpiration } ;
console.log(tokenContent) ;
        const token = jwt.sign(tokenContent, SECRET_KEY) ;
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
    loginUser
} ;