const express = require('express');
const db = require('../models/index.js');

const router = express.Router();
const controller = require('../controllers/cuveController');

// récupère toutes les cuves
router.get('/', controller.getAll);

module.exports = router;
