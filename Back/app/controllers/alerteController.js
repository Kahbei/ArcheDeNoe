const alertes = require("../models/index").alerte;
const catchError = require("../models/index").catchFunction;

exports.getAll = async (req, res) => {
  try {
    const allAlertes = await alertes.findAll();
    res.status(200).send({
      success: true,
      message: "liste des alertes",
      data: allAlertes,
    });
  } catch (err) {
    catchError(err, res);
  }
};

exports.createOne = async (req, res) => {
  try {
    const sRet = [];
    if (!req.body.idCandidature) {
      sRet.push("Il manque le paramètre idCandidature");
    } else if (typeof req.body.idCandidature !== "number") {
      sRet.push("idCandidature doit être de type number");
    }
    if (!req.body.role) {
      sRet.push("Il manque le paramètre role");
    } else if (typeof req.body.role !== "string") {
      sRet.push("role doit être de type string");
    }
    if (!req.body.narrateur) {
      sRet.push("Il manque le paramètre narrateur");
    } else if (typeof req.body.narrateur !== "string") {
      sRet.push("narrateur doit être de type string");
    }
    if (sRet.length > 0) {
      throw {
        status: 400,
        success: false,
        message: "Problème dans les paramètres",
        data: sRet,
      };
    }

    const newActeur = await alertes.create({
      id_candidature: req.body.idCandidature,
      role: req.body.role,
      narrateur: req.body.narrateur,
    });

    if (!newActeur) {
      throw {
        status: 500,
        success: false,
        message: "Erreur lors de la création",
      };
    }

    res.status(200).send({
      success: true,
      message: "Acteur créé avec succès",
      data: newActeur,
    });
  } catch (error) {
    catchError(error, res);
  }
};
