const Assignment = require('../models/Assignment');
const Professeur = require('../models/Professeur') ;


/* A propos pour la Home page */
const home = async (req, res) => {

    const professeurs = await Professeur.find({ email: { $ne: 'admin@gmail.com' } }).exec();
    const total = await Assignment.countDocuments().exec();
    const rendu = await Assignment.countDocuments({rendu:true}).exec();
    const non_rendu = await Assignment.countDocuments({rendu:false}).exec();
    
    const result = {
        total: total || 0,
        rendu: rendu || 0,
        non_rendu: non_rendu || 0,
        professeurs: professeurs
    };
    res.send(result);
};

module.exports = {
    home
};