const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
// const uploadImage = require("./uploadImage.js");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

// var myemail = process.env.SENDER_EMAIL;
// var mypassword = process.env.APPLICATION_PASSWORD;
// var myemail = "abhi123abc456@gmail.com";
// var mypassword = "lxmh yspf qtow whmp";
var myemail = "webthreeworldmarketplace@gmail.com";
var mypassword = "thds gueb xiud yswg";

// var recipient_email = "absvt11012552@gmail.com";
function sendEmail({ recipient_email, subject, message }) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: myemail,
        pass: mypassword,
      },
    });

    const mail_configs = {
      from: myemail,
      // to: recipient_email,
      to: recipient_email,
      subject: subject,
      text: message,
//       html: `<!DOCTYPE html>
// <html lang="en" >
// <head>
//   <meta charset="UTF-8">
//   <title>CodePen - OTP Email Template</title>
  

// </head>
// <body>
// <!-- partial:index.partial.html -->
// <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
//   <div style="margin:50px auto;width:70%;padding:20px 0">
//     <div style="border-bottom:1px solid #eee">
//       <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Koding 101</a>
//     </div>
//     <p style="font-size:1.1em">Hi,</p>
//     <p>Thank you for choosing Koding 101. Use the following OTP to complete your Password Recovery Procedure. OTP is valid for 5 minutes</p>
//     <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${OTP}</h2>
//     <p style="font-size:0.9em;">Regards,<br />Koding 101</p>
//     <hr style="border:none;border-top:1px solid #eee" />
//     <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
//       <p>Koding 101 Inc</p>
//       <p>1600 Amphitheatre Parkway</p>
//       <p>California</p>
//     </div>
//   </div>
// </div>
// <!-- partial -->
  
// </body>
// </html>`,
    };
    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `An error has occured` });
      }
      return resolve({ message: "Email sent succesfuly" });
    });
  });
}

app.get("/", (req, res) => {
  sendEmail()
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.post("/send_email", (req, res) => {
  // console.log("Somebody just hit me");
  sendEmail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

// app.post("/uploadImage", (req, res) => {
//   uploadImage(req.body.image)
//     .then((url) => res.send(url))
//     .catch((err) => res.status(500).send(err));
// });

// app.post("/uploadMultipleImages", (req, res) => {
//   uploadImage
//     .uploadMultipleImages(req.body.images)
//     .then((urls) => res.send(urls))
//     .catch((err) => res.status(500).send(err));
// });

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`);
});


// const express = require("express");
// const nodemailer = require("nodemailer");
// const cors = require("cors");
// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(express.json({ limit: "25mb" }));
// app.use(express.urlencoded({ limit: "25mb" }));
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   next();
// });

// const myemail = "support@webthreeworld.com";
// const mypassword = "AD99india@123";

// function sendEmail({ recipient_email, subject, message }) {
//   return new Promise((resolve, reject) => {
//     const transporter = nodemailer.createTransport({
//       host: "mail.webthreeworld.com",
//       port: 465,
//       secure: true, // true for 465, false for 587
//       auth: {
//         user: myemail,
//         pass: mypassword,
//       },
//       logger: true, // Enable logging
//       debug: true,  // Show debug output
//     });

//     const mail_configs = {
//       from: myemail,
//       to: recipient_email,
//       subject: subject,
//       text: message,
//     };

//     transporter.sendMail(mail_configs, (error, info) => {
//       if (error) {
//         console.error("Error occurred:", error);
//         return reject({ message: `An error has occurred: ${error.message}` });
//       }
//       console.log("Email sent:", info.response);
//       return resolve({ message: "Email sent successfully" });
//     });
//   });
// }

// app.get("/", (req, res) => {
//   res.send("Email service is running");
// });

// app.post("/send_email", (req, res) => {
//   sendEmail(req.body)
//     .then((response) => res.send(response.message))
//     .catch((error) => res.status(500).send(error.message));
// });

// app.listen(port, () => {
//   console.log(`nodemailerProject is listening at http://localhost:${port}`);
// });
