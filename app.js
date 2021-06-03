const express = require('express');
const routes = require('./app/routes');

const app = express();

app.set('view engine', 'hbs');

routes.init(app);

module.exports = app;
