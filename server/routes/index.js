const { Router } = require('express');
const usersRouter = require('./usersRouter');
const eventsRouter = require('./eventsRouter');
const creatorEventsRouter = require('./creatorEventsRouter');
const categoriesRouter = require('./categoriesRouter');

const router = Router();

router.use('/users', usersRouter);
router.use('/creator', creatorEventsRouter);
router.use('/events', eventsRouter);
router.use('/categories', categoriesRouter);

module.exports = router;
