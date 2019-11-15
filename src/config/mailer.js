import nodeMailer from "nodemailer";
require('dotenv').config(); 

let adminEmail = process.env.MAIL_USER;
let adminPassword = process.env.MAil_PASSWORD;
let mailHost = process.env.MAIL_HOST;
let mailPort = process.env.MAIL_PORT;

let sendEmail = (to, subject, htmlContent) => {
  let transporter = nodeMailer.createTransport({
    host: mailHost,
    port: mailPort,
    secure: false, // user SSL -> TLS
    auth: {
      user: adminEmail, 
      pass: adminPassword
    }
  });

  let options = {
    from: adminEmail,
    to: to,
    subject: subject,
    html: htmlContent
  };

  return transporter.sendMail(options); // This default return a promise
};

module.exports = sendEmail;