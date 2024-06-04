const ResponseUtils = require('../../utils/response');
const ResponseStatusCode = require('../../constant/responseStatusCode');
const { mockResponseListPlayer } = require('../../mockResponse');

const getListPlayer = (ctx, params) => {
  return ResponseUtils.formatServiceReturn(
    true,
    ResponseStatusCode.SUCCESS,
    mockResponseListPlayer,
    'Success Get List Player'
  );
};

module.exports = {
  getListPlayer
};
