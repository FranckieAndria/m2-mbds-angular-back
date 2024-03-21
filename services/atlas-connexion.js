let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const uri = 'mongodb+srv://assignments:assignments@cluster0.mtnhyrc.mongodb.net/assignments?retryWrites=true&w=majority&appName=Cluster0';
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