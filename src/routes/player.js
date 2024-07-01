const router = require('express').Router();
const PlayerController = require('../controllers/player');
const backdoorTokenValidator = require('../middlewares/backdoorTokenValidator');

router.get('/', [backdoorTokenValidator], PlayerController.listPlayer);
router.post('/', [backdoorTokenValidator], PlayerController.createPlayer);
router.put('/:id', [backdoorTokenValidator], PlayerController.updatePlayer);
router.delete('/:id', [backdoorTokenValidator], PlayerController.deletePlayer);
router.get(
  '/:id/detail',
  [backdoorTokenValidator],
  PlayerController.detailPlayer
);

module.exports = router;
