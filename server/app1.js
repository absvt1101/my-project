const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

const myemail = "support@webthreeworld.com";
const mypassword = "AD99india@123";

function sendEmail({ recipient_email, subject, message }) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: "mail.webthreeworld.com",
      port: 465,
      secure: true, // true for 465, false for 587
      auth: {
        user: myemail,
        pass: mypassword,
      },
      logger: true, // Enable logging
      debug: true,  // Show debug output
    });

    const mail_configs = {
      from: myemail,
      to: recipient_email,
      subject: subject,
      text: message,
      html: `
        <p>Details :</p>
        <p>Name - Abhinav Shrivastava</p>
        <p>Email - absvt11012552@gmail.com</p>
        <p>Phone - 917088201707</p>
        <p>Message - chck webmail</p>
      `,
    };

    transporter.sendMail(mail_configs, (error, info) => {
      if (error) {
        console.error("Error occurred:", error);
        return reject({ message: `An error has occurred: ${error.message}` });
      }
      console.log("Email sent:", info.response);
      return resolve({ message: "Email sent successfully" });
    });
  });
}

app.get("/", (req, res) => {
  res.send("Email service is running");
});

app.post("/send_email", (req, res) => {
  sendEmail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`);
});
