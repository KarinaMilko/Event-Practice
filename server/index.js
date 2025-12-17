const http = require('http');
const app = require('./app');

const PORT = process.env.PORT ?? 5000;
const HOST = process.env.HOST ?? 'localhost';

const httpServer = http.createServer(app);

httpServer.listen(PORT, HOST, () =>
  console.log(`Server is listening http://${HOST}:${PORT}`)
);

//============================================================
const nodemailer = require('nodemailer');

(async () => {
  try {
    const account = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    });

    let message = {
      from: 'Event Calendar <no-reply@events.gmail.com>',
      to: 'Recipient <recipient@example.com>',
      subject: 'Congrats',
      text: 'Happy birthday to you!',
      html: '<p><b>Happy birthday</b> to you!</p>',
    };

    const info = await transporter.sendMail(message);
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.log(error);
  }
})();
