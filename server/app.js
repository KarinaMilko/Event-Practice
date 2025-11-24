const express = require('express');
const { errorHandlers } = require('./middleware');

const app = express();

app.use(express.json());

app.use('/api', router);

app.use(errorHandlers.errorHandler);

module.exports = app;
