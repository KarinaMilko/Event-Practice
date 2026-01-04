const { EventCategory } = require('./../db/models');

module.exports.getAllCategories = async (req, res, next) => {
  try {
    const foundCategories = await EventCategory.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      raw: true,
    });
    res.status(200).send({ data: foundCategories });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
