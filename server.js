const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.load({ path: '.env' });

const PORT = process.env.PORT || 3030;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src'));
app.use(express.static('dist'));

// app.all('*', (req, res) => res.sendFile(path.join(__dirname, '/dist/index')));
app.post('/contact', (req, res) => {
  const contactInfo = req.body.contactInfo;

  const transporter = nodemailer.createTransport({
    service: 'hotmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_1, // silentpony@hotmail.com
      pass: process.env.EMAIL_1_PASS
    }
  });

  const mailOptions = {
    from: '"glendaleacosta.com <silentpony@hotmail.com>',
    to: process.env.EMAIL_2,  // gglendale17@gmail.com
    subject: 'glendaleacosta.com Message',

    html:
            `<ul>  \
                <li>Name: ${contactInfo.name}</li> \
                <li>Email: ${contactInfo.email}</li> \
                <li>Message: ${contactInfo.message}</li> \
            </ul>`
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.json({
        msg: 'Whoops, try again later.'
      });
    }
    return res.json({
      msg: 'You message has been sent!'
    });
  });

  return res.json({ msg: contactInfo });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`App is up on port ${PORT}`);
});
