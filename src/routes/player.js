const router = require('express').Router();
const PlayerController = require('../controllers/player');

router.get('/', PlayerController.list);
router.get('/:id/detail', PlayerController.detail);

module.exports = router;
