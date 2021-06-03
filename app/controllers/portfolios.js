const { getTweets } = require('../services/tweets');
const { getPortfolio } = require('../services/portfolios');
const { parsePortfolio } = require('../serializers/portfolios');

exports.getPortfolio = async (req, res) => {
  try {
    const portfolio = await getPortfolio(req.query.id);
    const tweets = await getTweets(portfolio.Item.twitter_user_name);
    res.render('portfolio', { req, portfolio: parsePortfolio(portfolio.Item, tweets) });
  } catch (error) {
    res.render('error', { req, error: error.message });
  }
};
