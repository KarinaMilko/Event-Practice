const { Router } = require('express');
const { creatorEventsController } = require('../controllers');

const creatorEventsRouter = Router();

creatorEventsRouter.post('/', creatorEventsController.createEvent);

creatorEventsRouter
  .route('/:eventId')
  .patch(creatorEventsController.updateEvent)
  .delete(creatorEventsController.deleteEvent);

module.exports = creatorEventsRouter;
