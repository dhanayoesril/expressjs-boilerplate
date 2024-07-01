const ResponseUtils = require('../../utils/response');
const ResponseStatusCode = require('../../constant/responseStatusCode');
const Helper = require('../../utils/helper');
const mockResponse = require('../../mockResponse/response.json');

const insertPlayer = async (ctx, body) => {
  const existingData = mockResponse;
  const checkSamePlayer = existingData.filter((dt) => dt.name === body?.name);
  if (checkSamePlayer?.length > 0) {
    return ResponseUtils.formatServiceReturn(
      false,
      ResponseStatusCode.BAD_REQUEST,
      null,
      'Player already exist!'
    );
  }
  const newData = {
    id: existingData?.length + 1 || 0,
    name: body?.name,
    nationality: body?.nationality
  };
  existingData.push(newData);
  Helper.writeJSONFile('src/mockResponse/response.json', existingData);
  return ResponseUtils.formatServiceReturn(
    true,
    ResponseStatusCode.SUCCESS,
    null,
    'Success Insert New Player'
  );
};

module.exports = {
  insertPlayer
};
