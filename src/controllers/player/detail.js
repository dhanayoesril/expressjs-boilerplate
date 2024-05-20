const PlayerService = require('../../services/player');
const DetailPlayerValidation = require('../../validations/player/detailPlayer');

const detail = async (req, res) => {
  const { ctx, params } = req;

  const result = await PlayerService.getDetailPlayer(ctx, params);
  let response = {
    success: true,
    message: 'Success Get Detail Player',
    data: result
  };
  if (!result) {
    response.success = false;
    response.message = 'Failed Get Detail PLayed';
    response.data = null;
    res.send(response);
  }
  return res.send(response);
};

module.exports = {
  detail
};
