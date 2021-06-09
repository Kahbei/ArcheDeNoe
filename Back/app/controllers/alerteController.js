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
    if (!req.body.idEspece) {
      sRet.push("Il manque le paramètre idEspece");
    } else if (typeof req.body.idEspece !== "number") {
      sRet.push("idEspece doit être de type number");
    }

    if (!req.body.libelle) {
      sRet.push("Il manque le paramètre libelle");
    } else if (typeof req.body.libelle !== "string") {
      sRet.push("libelle doit être de type string");
    }

    if (!req.body.description) {
      sRet.push("Il manque le paramètre description");
    } else if (typeof req.body.description !== "string") {
      sRet.push("description doit être de type string");
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
      id_espece: req.body.idEspece,
      libelle: req.body.libelle,
      description: req.body.description,
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
      message: "Alerte créé avec succès",
      data: newActeur,
    });
  } catch (error) {
    catchError(error, res);
  }
};

exports.readOne = async (req, res) => {
  try {
    sRet = [];
    if (!req.body.idAlerte) {
      sRet.push("Il manque le paramètre idAlerte");
    } else if (typeof req.body.idAlerte !== "number") {
      sRet.push("idEspece doit être de type number");
    }
    if (sRet.length > 0) {
      throw {
        status: 400,
        success: false,
        message: "Erreur dans le paramètre idAlerte",
        data: sRet,
      };
    }

    const alerte = await alertes.findOne({
      where: {
        id_alerte: req.body.idAlerte,
      },
    });

    if (!alerte) {
      throw {
        status: 404,
        success: false,
        message: "Alerte non trouvée",
      };
    }

    res.status(200).send({
      success: true,
      message: "Alerte trouvée avec succès",
      data: alerte,
    });
  } catch (error) {
    catchError(error, res);
  }
};

exports.updateOne = async (req, res) => {
  try {
    const sRet = [];
    if (!req.body.idAlerte) {
      sRet.push("Il manque le paramètre idAlerte");
    } else if (typeof req.body.idAlerte !== "number") {
      sRet.push("idEspece doit être de type number");
    }

    if (!req.body.idEspece) {
      sRet.push("Il manque le paramètre idEspece");
    } else if (typeof req.body.idEspece !== "number") {
      sRet.push("idEspece doit être de type number");
    }

    if (!req.body.libelle) {
      sRet.push("Il manque le paramètre libelle");
    } else if (typeof req.body.libelle !== "string") {
      sRet.push("libelle doit être de type string");
    }

    if (!req.body.description) {
      sRet.push("Il manque le paramètre description");
    } else if (typeof req.body.description !== "string") {
      sRet.push("description doit être de type string");
    }

    if (sRet.length > 0) {
      throw {
        status: 400,
        success: false,
        message: "Problème dans les paramètres",
        data: sRet,
      };
    }

    await alertes.update(
      {
        id_espece: req.body.idEspece,
        libelle: req.body.libelle,
        description: req.body.description,
      },
      {
        where: {
          id_alerte: req.body.idAlerte,
        },
      }
    );
    const updatedAlert = await alertes.findOne({
      where: {
        id_alerte: req.body.idAlerte
      }
    })
    if (!updatedAlert) {
      throw {
        status: 500,
        success: false,
        message: "Erreur lors de l'update de l'alerte",
      };
    }

    res.status(200).send({
      success: true,
      message: `Alerte mise à jour`,
      data: updatedAlert
    });
  } catch (error) {
    catchError(error, res);
  }
};

exports.deleteOne = async (req, res) => {
  try {
    sRet = [];
    if (!req.body.idAlerte) {
      sRet.push("Il manque le paramètre idAlerte");
    } else if (typeof req.body.idAlerte !== "number") {
      sRet.push("idEspece doit être de type number");
    }
    if (sRet.length > 0) {
      throw {
        status: 400,
        success: false,
        message: "Erreur dans le paramètre idAlerte",
        data: sRet,
      };
    }

    const deletedAlerte = await alertes.destroy({
      where: {
        id_alerte: req.body.idAlerte,
      },
    });

    if (!deletedAlerte) {
      throw {
        status: 500,
        success: false,
        message: "Erreur lors de la suppression",
      };
    }

    res.status(200).send({
      success: true,
      message: `Alerte ${req.body.idAlerte} supprimée`,
    });
  } catch (error) {
    catchError(error, res);
  }
};
