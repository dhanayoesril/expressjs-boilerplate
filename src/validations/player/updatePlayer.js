const Joi = require('joi');

module.exports = function () {
  return Joi.object().keys({
    id: Joi.number().integer().min(0).required(),
    name: Joi.string().required(),
    nationality: Joi.string().required()
  });
};
