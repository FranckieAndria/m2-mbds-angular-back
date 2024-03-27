const jwt = require('jsonwebtoken') ;
const BCrypt = require('bcrypt') ;
const { SECRET_KEY } = require('./environment');

const loginUser = async (inputPassword, user, req) => {
    const correctPassword = await BCrypt.compare(inputPassword, user.password) ;
    if (correctPassword) {
        user.password = '' ;
        const tokenContent = { user: user, dateLogin: new Date() } ;
        const token = jwt.sign(tokenContent, SECRET_KEY, { expiresIn: 1800 }) ;
        return {
            token: token,
            logged: true,
            message:'Authentification réussie',
            body: req.body,
            user: {
                nom: user.nom,
                prenom: user.prenom,
                email: user.email,
                role: user.role
            }
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