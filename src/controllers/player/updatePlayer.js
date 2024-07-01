const ResponseUtils = require('../../utils/response');
const PlayerService = require('../../services/player');
const UpdatePlayerValidation = require('../../validations/player/updatePlayer');

const updatePlayer = async (req, res, next) => {
  const { ctx, params, body } = req;

  try {
    let sanitizedParam;

    const input = {
      ...params,
      ...body
    };

    try {
      sanitizedParam = await UpdatePlayerValidation().validateAsync({
        ...input
      });
    } catch (err) {
      ResponseUtils.badRequest({ res, err });
    }

    const result = await PlayerService.updatePlayer(ctx, input);
    if (!result?.status) {
      return ResponseUtils.formatClientErrorResponse({
        res,
        result
      });
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
  updatePlayer
};
