const ResponseUtils = require('../../utils/response');
const ResponseStatusCode = require('../../constant/responseStatusCode');
const mockResponse = require('../../mockResponse/response.json');

const getListPlayer = (ctx, params) => {
  return ResponseUtils.formatServiceReturn(
    true,
    ResponseStatusCode.SUCCESS,
    mockResponse,
    'Success Get List Player'
  );
};

module.exports = {
  getListPlayer
};
