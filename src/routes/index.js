const router = require('express').Router();
const player = require('./player');

router.use('/player', player);

module.exports = router;
