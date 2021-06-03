const Twitter = require('twitter');
const logger = require('../logger');
const config = require('../../config');
const { DEFAULT_TWEETS_COUNT } = require('../constants');

const client = new Twitter({
  consumer_key: config.twitter.consumerKey,
  consumer_secret: config.twitter.consumerSecret,
  access_token_key: config.twitter.accessTokenKey,
  access_token_secret: config.twitter.accessTokenSecret,
});

exports.getTweets = (screenName) => {
  const params = { screen_name: screenName, count: DEFAULT_TWEETS_COUNT };
  return client.get('statuses/user_timeline', params)
    .then((tweets) => tweets)
    .catch((error) => {
      logger.error(error);
      throw new Error('An error occurred while trying to get the tweets');
    });
};
