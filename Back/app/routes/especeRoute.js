const express = require('express');
const db = require('../models/index.js');

const router = express.Router();
const especes = db.espece.findAll();
const controller = require('../controllers/especeController')

router.get('/', controller.index);

// router.get('/', db.espece.findAll().then(espece => {
//     console.log('espces :', JSON.stringify(espece, null, 4))
// }));

module.exports = router;
