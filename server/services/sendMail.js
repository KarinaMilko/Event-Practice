const nodemailer = require('nodemailer');

module.exports.sendMail = async (name, email) => {
  const NODE_ENV = process.env.NODE_ENV ?? 'development';
  console.log(name, email);

  try {
    const transporter = nodemailer.createTransport(
      await getTransporterOptions()
    );

    const message = {
      from: 'Event Calendar <no-reply@events.gmail.com>',
      to: `${name} <${email}>`,
      subject: 'Congrats',
      text: `Happy birthday to you, ${name}!`,
      html: `<p><b>Happy birthday</b> to you, ${name}!</p>`,
    };

    const info = await transporter.sendMail(message);

    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account

    if (NODE_ENV === 'development')
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.log(error);
  }
};

async function getTransporterOptions() {
  const NODE_ENV = process.env.NODE_ENV ?? 'development';

  if (NODE_ENV === 'development') {
    const account = await nodemailer.createTestAccount();
    console.log(account);
    return {
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    };
  }
  if (NODE_ENV === 'test') {
    return {};
  }
  if (NODE_ENV === 'production') {
    return {
      service: 'gmail',
      auth: {
        user: process.env.MAILING_EMAIL,
        pass: process.env.MAILING_PASS,
      },
    };
  }
}
