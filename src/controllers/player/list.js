const PlayerService = require('../../services/player');

const list = async (req, res) => {
  const { ctx, params } = req;
  const result = await PlayerService.getListPlayer(ctx, params);
  if (!result) {
    res.send('List player not found!');
  }
  return res.send(result);
};

module.exports = {
  list
};
