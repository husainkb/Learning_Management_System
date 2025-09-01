// const nodemailer = require('nodemailer');

// const mailSender = async (email, title, body) => {
//     try {
//         const transporter = nodemailer.createTransport({
//             host: process.env.MAIL_HOST,
//             auth: {
//                 user: process.env.MAIL_USER,
//                 pass: process.env.MAIL_PASS
//             }
//         });

//         const info = await transporter.sendMail({
//             from: 'StudyLearner || by Aniruddha Gade',
//             to: email,
//             subject: title,
//             html: body
//         });

//         // console.log('Info of sent mail - ', info);
//         return info;
//     }
//     catch (error) {
//         console.log('Error while sending mail (mailSender) - ', email);
//     }
// }

// module.exports = mailSender;

const nodemailer = require('nodemailer');

const mailSender = async (email, title, body) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,   // smtp.gmail.com
            port: 587,                     // TLS port
            secure: false,                 // use TLS (not SSL)
            auth: {
                user: process.env.MAIL_USER,  // your gmail
                pass: process.env.MAIL_PASS   // app password
            }
        });

        const info = await transporter.sendMail({
            from: `"StudyLearner LMS" <${process.env.MAIL_USER}>`,  // proper sender format
            to: email,
            subject: title,
            html: body
        });

        console.log('✅ Mail sent successfully to:', email);
        return info;
    }
    catch (error) {
        console.log('❌ Error while sending mail (mailSender) - ', email);
        console.error(error.message);
    }
};

module.exports = mailSender;
