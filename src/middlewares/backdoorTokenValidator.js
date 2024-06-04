const Config = require('../configs/config');
const ResponseStatusCode = require('../constant/responseStatusCode');

module.exports = async (req, res, next) => {
  const feature =
    req.headers['x-features'] ||
    req.headers['X-Features'] ||
    req.headers['X-FEATURES'];
  const apiKey =
    req.headers['x-api-key'] ||
    req.headers['X-Api-Key'] ||
    req.headers['X-API-KEY'];

  const backdoorConfig = Config.backdoorApi[feature];

  if (!apiKey || !feature) {
    return res
      .status(ResponseStatusCode.UNAUTHORIZED)
      .json({ message: 'UNAUTHORIZED' });
  }

  if (!backdoorConfig) {
    return res
      .status(ResponseStatusCode.UNAUTHORIZED)
      .json({ message: 'UNAUTHORIZED' });
  }

  if (apiKey !== backdoorConfig.key) {
    return res
      .status(ResponseStatusCode.UNAUTHORIZED)
      .json({ message: 'UNAUTHORIZED' });
  }

  next();
};
