const express = require("express");
const db = require("../models/index.js");

const router = express.Router();
const controller = require("../controllers/utilisateurController");

// récupère toutes les espèces
router.get("/", controller.getAll);
router.post("/login", controller.getOne)

module.exports = router;
