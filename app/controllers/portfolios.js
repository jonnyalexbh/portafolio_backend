const { getPortfolio } = require('../services/portfolios');

exports.getPortfolio = (req, res, next) => getPortfolio(req.query.id)
  .then((result) => res.send(result))
  .catch(next);
