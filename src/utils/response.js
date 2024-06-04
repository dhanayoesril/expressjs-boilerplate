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

module.exports = {
  formatServiceReturn,
  success: ({ res, message, data }) => {
    sendResponse(res, ResponseStatusCode.SUCCESS, message, data);
  },
  notFound: ({ res, message, err }) => {
    sendResponse(res, ResponseStatusCode.NOT_FOUND, message, null, err);
  },
  badRequest: ({ res, message, err }) => {
    const msg = err.message;
    sendResponse(res, ResponseStatusCode.BAD_REQUEST, msg, null, err);
  }
};
