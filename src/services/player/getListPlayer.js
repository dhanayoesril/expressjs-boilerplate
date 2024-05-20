const { mockResponseListPlayer } = require('../../mockResponse');

const getListPlayer = (ctx, params) => {
  return mockResponseListPlayer;
};

module.exports = {
  getListPlayer
};
