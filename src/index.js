const { mockResponseListPlayer } = require('./mockResponse');
const express = require('express');

const app = express();
const PORT = 3001;

app.listen(PORT, () => console.log(`Running express server on port ${PORT}!`));

app.get('/players', (req, res) => {
  res.send(mockResponseListPlayer);
});
