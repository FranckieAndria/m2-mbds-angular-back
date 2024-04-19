let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const uri = process.env.ATLS_URL;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

mongoose.connect(uri, options)
    .then(() => {
            console.log("Connecté à la base MongoDB !");
        },
        err => {
            console.log('Erreur de connexion: ', err);
        });