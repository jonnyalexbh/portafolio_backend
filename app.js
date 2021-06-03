const express = require('express');
const path = require('path');
const routes = require('./app/routes');

const app = express();

app.set('view engine', 'hbs');

// static files
const publicDirectory = path.join(__dirname, './public');

app.use(express.static(publicDirectory));

routes.init(app);

module.exports = app;
