const ResponseUtils = require('../../utils/response');
const ResponseStatusCode = require('../../constant/responseStatusCode');
const Helper = require('../../utils/helper');
const mockResponse = require('../../mockResponse/response.json');

const deletePlayer = async (ctx, input) => {
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
  const newData = existingData.filter((dt) => dt.id !== Number(input?.id));
  Helper.writeJSONFile('src/mockResponse/response.json', newData);
  return ResponseUtils.formatServiceReturn(
    true,
    ResponseStatusCode.SUCCESS,
    null,
    'Success Delete Player'
  );
};

module.exports = {
  deletePlayer
};
