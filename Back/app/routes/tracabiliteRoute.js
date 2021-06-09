const express = require("express");
const db = require("../models/index.js");

const router = express.Router();
const controller = require("../controllers/tracabiliteController");

// récupère toutes les espèces
router.get("/", controller.getAll);

module.exports = router;
