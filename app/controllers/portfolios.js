const { getPortfolio } = require('../interactors/portfolios');

exports.getPortfolio = async (req, res) => getPortfolio(req.params.id)
  .then((portfolio) => res.render('portfolio', { req, portfolio }))
  .catch((error) => res.render('error', { req, error: error.message }));
