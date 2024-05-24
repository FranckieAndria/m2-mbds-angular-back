const nodemailer = require('nodemailer') ;

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const sendMail = async (sendTo, mailContent) => {
    transporter.sendMail({
        from: {
            name: "Université CA - Communication",
            address: process.env.EMAIL_USERNAME
        },
        to: sendTo,
        subject: 'ASSIGNMENT RENDU - INFO',
        html: mailContent
    }, function (err, info) {
        if (err) console.log(err);
    });
};

module.exports = {
    sendMail
};