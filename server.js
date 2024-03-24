let express = require('express');
let app = express();
let bodyParser = require('body-parser');

// Connexion à la base de données sur Atlas
require ('./services/atlas-connexion.js') ;

// Pour accepter les connexions cross-domain (CORS)
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Pour les formulaires
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Obligatoire si déploiement dans le cloud !
let port = process.env.PORT || 8010;


/*****************
* ROUTES - START *
*****************/
const prefix = '/api';
app.use(prefix + '/etudiants', require('./routes/etudiants'));
app.use(prefix + '/professeurs', require('./routes/professeurs'));
app.use(prefix + '/assignments', require('./routes/assignments'));
/*****************
* ROUTES - START *
*****************/


// On démarre le serveur
app.listen(port, "0.0.0.0");
console.log('Serveur démarré sur http://localhost:' + port);

module.exports = app;