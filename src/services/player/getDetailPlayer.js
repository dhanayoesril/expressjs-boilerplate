const mockResponse = require('../../mockResponse/response.json');
const ResponseStatusCode = require('../../constant/responseStatusCode');
const ResponseUtils = require('../../utils/response');

const getDetailPlayer = (ctx, params) => {
  const { id } = params;
  const detailPlayer = mockResponse.find((dt) => dt.id === Number(id));
  if (!detailPlayer?.id) {
    return ResponseUtils.formatServiceReturn(
      false,
      ResponseStatusCode.NOT_FOUND,
      null,
      'Player not found!'
    );
  }
  return ResponseUtils.formatServiceReturn(
    true,
    ResponseStatusCode.SUCCESS,
    detailPlayer,
    'Success Get Detail Player'
  );
};

module.exports = {
  getDetailPlayer
};
