const { mockResponseListPlayer } = require('../../mockResponse');

const getDetailPlayer = (ctx, params) => {
  const { id } = params;
  const detailPlayer = mockResponseListPlayer.find(
    (dt) => dt.id === Number(id)
  );
  return detailPlayer;
};

module.exports = {
  getDetailPlayer
};
