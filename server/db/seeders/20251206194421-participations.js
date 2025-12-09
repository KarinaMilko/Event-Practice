'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'participations',
      [
        // Event ID 1 - 2 participants
        {
          user_id: 2, // User 2 registering for Event 1
          event_id: 1, // Event ID 1
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3, // User 3 registering for Event 1
          event_id: 1, // Event ID 1
          created_at: new Date(),
          updated_at: new Date(),
        },

        // Event ID 2 - 3 participants
        {
          user_id: 1, // User 1 registering for Event 2
          event_id: 2, // Event ID 2
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 4, // User 4 registering for Event 2
          event_id: 2, // Event ID 2
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 5, // User 5 registering for Event 2
          event_id: 2, // Event ID 2
          created_at: new Date(),
          updated_at: new Date(),
        },

        // Event ID 3 - 2 participants
        {
          user_id: 2, // User 2 registering for Event 3
          event_id: 3, // Event ID 3
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 5, // User 5 registering for Event 3
          event_id: 3, // Event ID 3
          created_at: new Date(),
          updated_at: new Date(),
        },

        // Event ID 4 - 3 participants
        {
          user_id: 1, // User 1 registering for Event 4
          event_id: 4, // Event ID 4
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3, // User 3 registering for Event 4
          event_id: 4, // Event ID 4
          created_at: new Date(),
          updated_at: new Date(),
        },

        // Event ID 5 - 2 participants
        {
          user_id: 1, // User 1 registering for Event 5
          event_id: 5, // Event ID 5
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 4, // User 4 registering for Event 5
          event_id: 5, // Event ID 5
          created_at: new Date(),
          updated_at: new Date(),
        },

        // Event ID 6 - No participants (no one registers for Event 6)
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('participations', null, {});
  },
};
