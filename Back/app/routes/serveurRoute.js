const express = require('express');
const db = require('../models/index.js');

const router = express.Router();
const controller = require('../controllers/serveurController')

// récupère tous les serveurs
router.get('/', controller.getAll);

module.exports = router;
