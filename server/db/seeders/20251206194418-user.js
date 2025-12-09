
'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Вставляємо користувачів з хешованими паролями безпосередньо в полі password_hash
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'John Doe',
          email: 'john.doe@example.com',
          password_hash: bcrypt.hashSync('password123', 10), // Хешуємо пароль безпосередньо в полі
          birthdate: '1990-05-15',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          password_hash: bcrypt.hashSync('password123', 10), // Хешуємо пароль безпосередньо в полі
          birthdate: '1985-08-22',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Michael Johnson',
          email: 'michael.johnson@example.com',
          password_hash: bcrypt.hashSync('password123', 10), // Хешуємо пароль безпосередньо в полі
          birthdate: '1992-11-10',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Emily Davis',
          email: 'emily.davis@example.com',
          password_hash: bcrypt.hashSync('password123', 10), // Хешуємо пароль безпосередньо в полі
          birthdate: '1994-02-18',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Chris Brown',
          email: 'chris.brown@example.com',
          password_hash: bcrypt.hashSync('password123', 10), // Хешуємо пароль безпосередньо в полі
          birthdate: '1988-01-25',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};