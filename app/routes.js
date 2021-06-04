const { healthCheck } = require('./controllers/health_check');
const { getPortfolio } = require('./controllers/portfolios');
const { home } = require('./controllers/urls');

exports.init = (app) => {
  app.get('/', home);
  app.get('/health', healthCheck);
  app.get('/portfolios/:id', getPortfolio);
};
