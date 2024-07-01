const ResponseStatusCode = require('../constant/responseStatusCode');

const formatServiceReturn = (status, code, data = null, message = null) => {
  return { status, code, data, message };
};

const sendResponse = (res, code, message, data, error) => {
  const result = {
    message,
    success: true
  };

  if (data) {
    result.data = data;
  }

  if (error) {
    result.success = false;
  }

  res.status(code);
  res.json(result);
};

const success = ({ res, message, data }) => {
  sendResponse(res, ResponseStatusCode.SUCCESS, message, data);
};

const notFound = ({ res, message, err }) => {
  const msg = message || err.message;
  sendResponse(res, ResponseStatusCode.BAD_REQUEST, msg, null, err);
};

const badRequest = ({ res, message, err }) => {
  const msg = message || err.message;
  sendResponse(res, ResponseStatusCode.BAD_REQUEST, msg, null, err);
};

const formatClientErrorResponse = ({ res, result, err }) => {
  const message = result?.message;
  if (result?.code === ResponseStatusCode.BAD_REQUEST) {
    if (!err) err = new Error(message);
    badRequest({ res, message, err });
  }
};

module.exports = {
  formatServiceReturn,
  success,
  notFound,
  badRequest,
  formatClientErrorResponse
};
