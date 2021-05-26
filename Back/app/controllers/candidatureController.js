const candidature = require('../models/index').candidature;
const catchError = require('../models/index').catchFunction;

exports.getAll = async (req, res) => {
    try {
        const allCandidatures = await candidature.findAll();
        res.status(200).send({
            success: true,
            message: "liste des espèces",
            data: allCandidatures
        });
    } catch(err) {
        catchError(err, res);
    }
}

exports.createOne = async (req, res) => {
    try {
        // init du tableau d'erreur
        let attributeErrors = [];

        //
        if (!req.body.id_alerte) {
            attributeErrors.push("L'attribut \"id_alerte\" n'est pas défini")
        } else if (typeof req.body.id_alerte !== "number") {
            attributeErrors.push("L'attribut \"id_alerte\" n'est pas un number")
        }

        if (!req.body.id_utilisateur) {
            attributeErrors.push("L'attribut \"id_utilisateur\" n'est pas défini")
        } else if (typeof req.body.id_utilisateur !== "number") {
            attributeErrors.push("L'attribut \"id_utilisateur\" n'est pas un number")
        }

        if (!req.body.lettre_motivation) {
            attributeErrors.push("L'attribut \"lettre_motivation\" n'est pas défini")
        } else if (typeof req.body.lettre_motivation !== "string") {
            attributeErrors.push("L'attribut \"lettre_motivation\" n'est pas un string")
        }

        if (attributeErrors.length > 0) {
            throw {
                status: 400,
                success: false,
                message: "Les erreurs suivantes doivent être corrigées : ",
                data: attributeErrors
            };
        }

        const CreateCandidature = await candidature.create({
            id_alerte: req.body.id_alerte,
            id_utilisateur: req.body.id_utilisateur,
            lettre_motivation: req.body.lettre_motivation
        })

        if (!CreateCandidature) {
            throw {
                status: 500,
                success: false,
                message: "Erreur lors de la création"
            };
        }

        res.status(200).send({
            success: true,
            message: "La candidature a été rajoutée avec succès !",
            data: CreateCandidature
        })

    } catch (err) {
        catchError(err, res);
    }
}

exports.deleteOne = async (req, res) => {
    try {
        // init du tableau d'erreur
        let attributeErrors = [];

        //
        if (!req.body.id_candidature) {
            attributeErrors.push("L'attribut \"id_candidature\" n'est pas défini")
        } else if (typeof req.body.id_candidature !== "number") {
            attributeErrors.push("L'attribut \"id_candidature\" n'est pas un number")
        }

        if (attributeErrors.length > 0) {
            throw {
                status: 400,
                success: false,
                message: "Les erreurs suivantes doivent être corrigées : ",
                data: attributeErrors
            };
        }

        const DeleteCandidature = await candidature.destroy({
            where: {
                id_candidature: req.body.id_candidature
            }
        })

        if (!DeleteCandidature) {
            throw {
                status: 500,
                success: false,
                message: "Erreur lors de la suppression"
            };
        }

        res.status(200).send({
            success: true,
            message: "La candidature a été supprimée avec succès !",
            data: DeleteCandidature
        })

    } catch (err) {
        catchError(err, res);
    }
}

