'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'event_categories',
      [
        {
          name: 'Webinar',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Conference',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Workshop',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Networking',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Seminar',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('event_categories', null, {});
  },
};
