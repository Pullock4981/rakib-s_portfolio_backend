const nodemailer = require('nodemailer');

const sendContactEmail = async ({ firstName, lastName, email, phone, message }) => {
  // Transporter setup
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${firstName} ${lastName}" <${email}>`,
    to: process.env.EMAIL_USER, // Receive emails at the same address, or change it
    subject: `Portfolio Contact from ${firstName} ${lastName}`,
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      
      Message:
      ${message}
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = {
  sendContactEmail
};
