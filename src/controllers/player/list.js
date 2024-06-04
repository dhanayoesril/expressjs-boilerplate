const ResponseUtils = require('../../utils/response');
const PlayerService = require('../../services/player');

const list = async (req, res) => {
  const { ctx, params } = req;
  try {
    const result = await PlayerService.getListPlayer(ctx, params);
    if (!result) {
      ResponseUtils.success({ res, message: result?.message });
    }
    return ResponseUtils.success({
      res,
      message: result?.message,
      data: result?.data
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  list
};
