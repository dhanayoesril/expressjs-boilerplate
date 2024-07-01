const ResponseUtils = require('../../utils/response');
const PlayerService = require('../../services/player');
const CreatePlayerValidation = require('../../validations/player/createPlayer');

const createPlayer = async (req, res, next) => {
  const { ctx, body } = req;

  try {
    let sanitizedParam;
    try {
      sanitizedParam = await CreatePlayerValidation().validateAsync({
        ...body
      });
    } catch (err) {
      ResponseUtils.badRequest({ res, err });
    }

    const result = await PlayerService.insertPlayer(ctx, body);
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
  createPlayer
};
