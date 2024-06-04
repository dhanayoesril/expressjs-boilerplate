const router = require('express').Router();
const PlayerController = require('../controllers/player');
const backdoorTokenValidator = require('../middlewares/backdoorTokenValidator');

router.get('/', [backdoorTokenValidator], PlayerController.list);
router.get('/:id/detail', [backdoorTokenValidator], PlayerController.detail);

module.exports = router;
