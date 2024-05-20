const express = require('express');
const routes = require('./routes')

const app = express();
const PORT = 3001;

app.listen(PORT, () => console.log(`Running express server on port ${PORT}!`));

app.use('/', routes);

