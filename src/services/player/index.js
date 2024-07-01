const { getListPlayer } = require('./getListPlayer');
const { getDetailPlayer } = require('./getDetailPlayer');
const { insertPlayer } = require('./insertPlayer');
const { updatePlayer } = require('./updatePlayer');
const { deletePlayer } = require('./deletePlayer');

module.exports = {
  getListPlayer,
  getDetailPlayer,
  insertPlayer,
  updatePlayer,
  deletePlayer
};
