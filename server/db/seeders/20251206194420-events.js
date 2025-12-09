'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'events',
      [
        {
          title: 'Tech Conference 2024',
          description:
            'A conference for technology enthusiasts to discuss the latest trends.',
          datetime: new Date('2024-03-15T10:00:00'),
          is_online: false,
          location: '123 Tech Park, Silicon Valley',
          category_id: 2, // Conference
          creator_id: 1, // User ID 1
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Python Webinar',
          description:
            'An online webinar on advanced Python programming techniques.',
          datetime: new Date('2024-04-10T14:00:00'),
          is_online: true,
          location: 'https://example.com/python-webinar',
          category_id: 1, // Webinar
          creator_id: 2, // User ID 2
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'AI Workshop',
          description:
            'Hands-on workshop for building machine learning models.',
          datetime: new Date('2024-05-05T09:00:00'),
          is_online: false,
          location: '456 Innovation Hub, San Francisco',
          category_id: 3, // Workshop
          creator_id: 3, // User ID 3
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Startup Networking Event',
          description: 'Networking event for startup founders and investors.',
          datetime: new Date('2024-06-12T18:00:00'),
          is_online: false,
          location: '789 Startup Avenue, New York',
          category_id: 4, // Networking
          creator_id: 4, // User ID 4
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Data Science Seminar',
          description:
            'A seminar discussing the future of data science and AI.',
          datetime: new Date('2024-07-20T11:00:00'),
          is_online: true,
          location: 'https://example.com/data-science-seminar',
          category_id: 5, // Seminar
          creator_id: 5, // User ID 5
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Blockchain in Finance',
          description:
            'A workshop on how blockchain is transforming the finance industry.',
          datetime: new Date('2024-08-05T10:00:00'),
          is_online: false,
          location: '123 Financial Center, London',
          category_id: 3, // Workshop
          creator_id: 1, // User ID 1
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Cloud Computing Conference',
          description:
            'An international conference on cloud computing innovations.',
          datetime: new Date('2024-09-15T09:00:00'),
          is_online: false,
          location: 'Cloud Expo Center, Berlin',
          category_id: 2, // Conference
          creator_id: 2, // User ID 2
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Machine Learning Webinar',
          description:
            'An introduction to machine learning techniques and algorithms.',
          datetime: new Date('2024-10-10T16:00:00'),
          is_online: true,
          location: 'https://example.com/ml-webinar',
          category_id: 1, // Webinar
          creator_id: 3, // User ID 3
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Big Data Workshop',
          description:
            'A hands-on workshop for working with big data tools and techniques.',
          datetime: new Date('2024-11-25T13:00:00'),
          is_online: false,
          location: 'Tech Training Center, Paris',
          category_id: 3, // Workshop
          creator_id: 4, // User ID 4
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: 'Future of Artificial Intelligence',
          description:
            'A seminar discussing the impact of AI on different industries.',
          datetime: new Date('2024-12-05T15:00:00'),
          is_online: true,
          location: 'https://example.com/ai-future-seminar',
          category_id: 5, // Seminar
          creator_id: 5, // User ID 5
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('events', null, {});
  },
};
