const express = require('express');
const db = require('../models/index.js');

const router = express.Router();
const controller = require('../controllers/candidatureController')

// récupère toutes les candidatures
router.get('/', controller.getAll);
router.post('/create', controller.createOne);
router.post('/delete', controller.deleteOne);

module.exports = router;
