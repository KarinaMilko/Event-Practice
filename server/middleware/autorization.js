const createHttpError = require('http-errors');
const { Event } = require('./../db/models');

module.exports.checkCreatorAccess = async (req, res, next) => {
  const {
    params: { creatorId, eventId },
  } = req;

  try {
    const updatingEvent = await Event.findByPk(eventId);

    if (!updatingEvent) {
      return next(createHttpError(404, 'Event not Exists'));
    }

    if (updatingEvent.creatorId !== Number(creatorId)) {
      return next(createHttpError(403, 'User can update only own events'));
    }
    next();
  } catch (err) {
    next(err);
  }
};
