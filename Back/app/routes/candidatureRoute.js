const express = require('express');
const db = require('../models/index.js');

const router = express.Router();
const controller = require('../controllers/candidatureController')

// récupère toutes les candidatures
router.get('/', controller.getAll);
router.post('/createOne', controller.createOne);


module.exports = router;
