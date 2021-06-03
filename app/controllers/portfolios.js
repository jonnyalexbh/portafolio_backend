const { getPortfolio } = require('../services/portfolios');

exports.getPortfolio = (req, res, next) => getPortfolio(req.query.id)
  .then((portfolio) => res.render('portfolio', { req, portfolio }))
  .catch(next);
