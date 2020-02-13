const express = require('express');
const router = express.Router();

const check_cache = require('../redis/check_cache');
const controller = require('./controller');

router.get('/:id',check_cache,controller.starship);

module.exports = router;