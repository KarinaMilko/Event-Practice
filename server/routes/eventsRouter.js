const { Router } = require('express');
const { eventsController } = require('../controllers');

const eventsRouter = Router();

eventsRouter.get('/', eventsController.getAllEvents);
module.exports = eventsRouter;
