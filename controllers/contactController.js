const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

dotenv.load({ path: '../.env' });

exports.post = (req, res) => {
  const contactInfo = req.body.contactInfo;

  const transporter = nodemailer.createTransport({
    service: 'hotmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_1,
      pass: process.env.EMAIL_1_PASS
    }
  });

  const mailOptions = {
    from: `glendaleacosta.com <${process.env.EMAIL_1}>`,
    to: process.env.EMAIL_2,
    subject: `${contactInfo.name} says hi!`,
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
        successful: false,
        msg: 'Something weird happened. Try again later.'
      });
    }

    return res.json({
      successful: true,
      msg: 'Message successfully sent!'
    });
  });
};
