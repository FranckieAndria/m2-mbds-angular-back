const nodemailer = require('nodemailer') ;

const usermail = 'franckieandriamalala.itu@gmail.com';

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: usermail,
        pass: 'dlfaovbimykouesl',
    },
});

const sendMail = async (sendTo, mailContent) => {
    transporter.sendMail({
        from: {
            name: "Université CA - Communication",
            address: usermail
        },
        to: sendTo,
        subject: 'ASSIGNMENT RENDU - INFO',
        html: mailContent
    }, function (err, info) {
        if (err) console.log(err);
        else console.log('Mail envoyé avec succès');
    });
};

module.exports = {
    sendMail
};