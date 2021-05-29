const express = require("express");
const db = require("../models/index.js");

const router = express.Router();
const controller = require("../controllers/especeController");

// récupère toutes les espèces
router.get("/", controller.getAll);
// récupère une espèce
router.post("/getOne", controller.getOne);
// créée une espèce
router.post("/createOne", controller.createOne);
// modifie une espèce
router.patch("/updateOne", controller.updateOne);

module.exports = router;
