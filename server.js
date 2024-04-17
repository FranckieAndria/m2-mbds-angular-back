/***********************
* REQUIREMENTS - START *
***********************/
let express = require('express');
const cors = require('cors');
let app = express();
let bodyParser = require('body-parser');
/*********************
* REQUIREMENTS - END *
*********************/

/***********************************************
* CONNEXION À LA BASE de DONNÉES ATLAS - START *
***********************************************/
require ('./services/atlas-connexion.js') ;
/*********************************************
* CONNEXION À LA BASE de DONNÉES ATLAS - END *
*********************************************/

/*******************************************
* CONNEXIONS (CROSS-DOMAIN | CORS) - START *
*******************************************/
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
/*******************************************
* CONNEXIONS (CROSS-DOMAIN | CORS) - END *
*******************************************/

/*********************
* MIDDLEWARE - START *
*********************/
app.use(cors()) ;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/*******************
* MIDDLEWARE - END *
*******************/

// Obligatoire si déploiement dans le cloud !
let port = process.env.PORT || 8010;

/*****************
* ROUTES - START *
*****************/
const prefix = '/api';
app.use(prefix + '/etudiants', require('./routes/etudiants'));
app.use(prefix + '/professeurs', require('./routes/professeurs'));
app.use(prefix + '/assignments', require('./routes/assignments'));
app.use(prefix + '/administrateurs', require('./routes/administrateurs.js'));
/*****************
* ROUTES - START *
*****************/

// On démarre le serveur
app.listen(port, "0.0.0.0");
console.log('Serveur démarré sur http://localhost:' + port);

module.exports = app;