const { Router } = require('express');
const { creatorEventsController } = require('../controllers');
const { autorization } = require('../middleware');

const creatorEventsRouter = Router();

creatorEventsRouter.post(
  '/:creatorId/events',
  creatorEventsController.createEvent
);

creatorEventsRouter
  .route('/:creatorId/events/:eventId')
  .patch(autorization.checkCreatorAccess, creatorEventsController.updateEvent)
  .delete(creatorEventsController.deleteEvent);

module.exports = creatorEventsRouter;
