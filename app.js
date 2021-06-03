const express = require('express');
const routes = require('./app/routes');
const logger = require('./app/logger');

const app = express();

routes.init(app);

app.listen(3000, () => {
  logger.info('Listening on port: 3000');
});
