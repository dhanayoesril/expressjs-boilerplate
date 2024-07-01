const ResponseUtils = require('../../utils/response');
const PlayerService = require('../../services/player');
const DeletePlayerValidation = require('../../validations/player/deletePlayer');

const deletePlayer = async (req, res, next) => {
  const { ctx, params } = req;

  try {
    let sanitizedParam;

    try {
      sanitizedParam = await DeletePlayerValidation().validateAsync({
        ...params
      });
    } catch (err) {
      ResponseUtils.badRequest({ res, err });
    }

    const result = await PlayerService.deletePlayer(ctx, params);
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
  deletePlayer
};
