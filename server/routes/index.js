const { Router } = require('express');
const usersRouter = require('./usersRouter');
const eventsRouter = require('./eventsRouter');

const router = Router();

router.use('/users', usersRouter);
router.use('/events', eventsRouter);

module.exports = router;
