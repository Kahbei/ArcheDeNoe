const express = require('express');
const db = require('../models/index.js');

const router = express.Router();
const controller = require('../controllers/especeController')

// récupère toutes les espèces
router.get('/', controller.index);

module.exports = router;
