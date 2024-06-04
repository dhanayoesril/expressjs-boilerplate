const express = require('express');
const routes = require('./routes');
const ResponseUtils = require('./utils/response');

const app = express();
const PORT = 3001;

app.listen(PORT, () => console.log(`Running express server on port ${PORT}!`));

app.use('/', routes);

app.use(function (req, res, _next) {
  const err = new Error('Path Not Found');
  ResponseUtils.notFound({
    res,
    message: err.message,
    err
  });
});
