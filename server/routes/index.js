const { Router } = require('express');
const usersRouter = require('./usersRouter');
const eventsRouter = require('./eventsRouter');
const creatorEventsRouter = require('./creatorEventsRouter');

const router = Router();

router.use('/users', usersRouter);
router.use('/creator', creatorEventsRouter);

router.use('/events', eventsRouter);

module.exports = router;
