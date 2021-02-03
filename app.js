const express = require('express');

const app = express();

const eachRequestFilter = require('./routes/eachRequestFilter');
const statusRouter = require('./routes/index');

app.use(eachRequestFilter);
app.use('/status', statusRouter);

module.exports = app;
