const express = require("express");
const db = require("../models/index.js");

const router = express.Router();
const controller = require("../controllers/alerteController");

// récupère toutes les espèces
router.get("/", controller.getAll);
router.post("/createOne", controller.createOne);
router.get("/getOne", controller.readOne);
router.patch("/updateOne", controller.updateOne);
router.delete("/deleteOne", controller.deleteOne);

module.exports = router;
