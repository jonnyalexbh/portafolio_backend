const { healthCheck } = require('./controllers/health_check');
const { getPortfolio } = require('./controllers/portfolios');

exports.init = (app) => {
  app.get('/health', healthCheck);
  app.get('/portfolios', getPortfolio);
};
