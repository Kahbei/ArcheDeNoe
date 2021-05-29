const express = require('express');
const db = require('../models/index.js');

const router = express.Router();
const controller = require('../controllers/serveurController')

// récupère tous les serveurs
router.get('/', controller.getAll);
// récupère un serveur
router.post('/getOne', controller.getOne);

module.exports = router;
