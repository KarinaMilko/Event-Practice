const schedule = require('node-schedule');
const { User, Sequelize } = require('./../db/models');
const { sendMail } = require('../services/sendMail');

module.exports.bitrhdayJob = () => {
  // '*/5 * * * * *'
  schedule.scheduleJob('0 9 * * *', async () => {
    try {
      const usersWithBirthday = await User.findAll({
        attributes: ['name', 'email'],
        where: Sequelize.literal(
          "to_char(birthdate,'DD MM') = to_char(CURRENT_DATE,'DD MM')"
        ),
        raw: true,
      });
      usersWithBirthday.forEach(u => sendMail(u.name, u.email));

      //   for (let i = 0; i < usersWithBirthday.length; i++) {
      //     const { name, email } = usersWithBirthday[i];
      //     await sendMail(name, email);
      //   }
    } catch (err) {
      console.log(err);
    }
  });
};
