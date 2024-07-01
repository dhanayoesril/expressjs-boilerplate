const ResponseUtils = require('../../utils/response');
const ResponseStatusCode = require('../../constant/responseStatusCode');
const Helper = require('../../utils/helper');
const mockResponse = require('../../mockResponse/response.json');

const updatePlayer = async (ctx, input) => {
  const existingData = mockResponse;
  const getData = existingData.filter((dt) => dt.id === Number(input?.id));
  if (getData?.length < 1) {
    return ResponseUtils.formatServiceReturn(
      false,
      ResponseStatusCode.BAD_REQUEST,
      null,
      `Player doesn't exist!`
    );
  }
  const indexData = existingData.findIndex((dt) => dt.id === Number(input?.id));
  existingData[indexData] = {
    id: Number(input?.id),
    name: input?.name,
    nationality: input?.nationality
  };
  Helper.writeJSONFile('src/mockResponse/response.json', existingData);
  return ResponseUtils.formatServiceReturn(
    true,
    ResponseStatusCode.SUCCESS,
    null,
    'Success Update New Player'
  );
};

module.exports = {
  updatePlayer
};
