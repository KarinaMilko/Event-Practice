const { Router } = require('express');
const { categoriesController } = require('../controllers');

const categoriesRouter = Router();

categoriesRouter.get('/', categoriesController.getAllCategories);

module.exports = categoriesRouter;
