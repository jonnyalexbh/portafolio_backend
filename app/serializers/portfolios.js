exports.parsePortfolio = (portfolio, tweets) => ({
  id: portfolio.id,
  title: portfolio.title,
  description: portfolio.description,
  profile_image: portfolio.profile_image,
  tweets: tweets.map((tweet) => (
    {
      text: tweet.text,
      title: tweet.entities.user_mentions[0] ? '' : tweet.user.screen_name,
    }
  )),
});
