exports.init = (app) => {
  app.get('/health', (req, res) => res.send('aaaaa'));

  app.get('/', (req, res) => {
    res.status(200).send({ message: 'Hello World' });
  });
};
