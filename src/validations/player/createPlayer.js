const Joi = require('joi');

module.exports = function () {
  return Joi.object().keys({
    name: Joi.string().required(),
    nationality: Joi.string().required()
  });
};
