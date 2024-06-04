const ResponseUtils = require('../../utils/response');
const PlayerService = require('../../services/player');
const DetailPlayerValidation = require('../../validations/player/detailPlayer');

const detail = async (req, res, next) => {
  const { ctx, params } = req;

  try {
    let sanitizedParam;
    try {
      sanitizedParam = await DetailPlayerValidation().validateAsync({
        ...params
      });
    } catch (err) {
      ResponseUtils.badRequest({ res, err });
    }

    const result = await PlayerService.getDetailPlayer(ctx, params);
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
  detail
};
