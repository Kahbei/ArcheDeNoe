const express = require('express');
const db = require('../models/index.js');

const router = express.Router();
const controller = require('../controllers/tacheProjetController')

// récupère tout le personnel
router.get('/', controller.getAll);

module.exports = router;
