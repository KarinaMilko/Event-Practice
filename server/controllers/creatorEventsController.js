const createHttpError = require('http-errors');
const { Event } = require('./../db/models');

// TODO: validation mw
module.exports.createEvent = async (req, res, next) => {
  const {
    body,
    params: { creatorId },
  } = req;

  body.creatorId = creatorId;

  try {
    const createdEvent = await Event.create(body);

    res.status(201).send({ data: createdEvent });
  } catch (err) {
    next(err);
  }
};

module.exports.updateEvent = async (req, res, next) => {
  const {
    body,
    params: { creatorId, eventId },
  } = req;

  body.creatorId = creatorId;

  try {
    const [, [updatedEvent]] = await Event.update(body, {
      where: { id: eventId },
      returning: true,
    });

    if (!updatedEvent) {
      return next(createHttpError(404, 'Event not Exists'));
    }

    res.status(200).send({ data: updatedEvent });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteEvent = async (req, res, next) => {};
