const express = require('express');
const app = express();
const routes = require('./app/routes');

routes.init(app);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
