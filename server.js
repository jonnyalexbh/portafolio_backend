const app = require('./app');

const logger = require('./app/logger');

app.listen(3000, () => {
  logger.info('Listening on port: 3000');
});
