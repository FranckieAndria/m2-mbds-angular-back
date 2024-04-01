const jwt = require('jsonwebtoken') ;
const { SECRET_KEY } = require('./environment');

function verifyToken(req, res, next) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(403).send({ auth: false, message: 'Erreur d\'authentication' });
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return res.status(403).send({ auth: false, message: 'Erreur de la validation' });
        req.params.id = decoded.user._id ;
        next();
    });
}

module.exports = verifyToken;