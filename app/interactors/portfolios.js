const { getTweets } = require('../services/tweets');
const { getPortfolio } = require('../services/portfolios');
const { parsePortfolio } = require('../serializers/portfolios');
const { checkPortfolioFound } = require('../utils');

exports.getPortfolio = async (id) => {
  const portfolio = await getPortfolio(id);
  if (checkPortfolioFound(portfolio)) {
    throw new Error('Portfolio not found');
  }
  const tweets = await getTweets(portfolio.Item.twitter_user_name);
  return parsePortfolio(portfolio.Item, tweets);
};
