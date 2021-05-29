const serveur = require('../models/index').serveur;
const catchError = require('../models/index').catchFunction;

exports.getAll = async (req, res) => {
    try {
        const allServeur = await serveur.findAll();
        res.status(200).send({
            success: true,
            message: "liste des serveurs",
            data: allServeur
        });
    } catch(err) {
        catchError(err, res);
    }
}

exports.getOne = async (req,res) => {
    try {
        // init du tableau d'erreur
        let attributeErrors = [];

        if (!req.body.id_serveur) {
            attributeErrors.push("L'attribut \"id_serveur\" n'est pas défini")
        } else if (typeof req.body.id_serveur !== "number") {
            attributeErrors.push("L'attribut \"id_serveur\" n'est pas un number")
        }

        if (attributeErrors.length > 0) {
            throw {
                status: 400,
                success: false,
                message: "Les erreurs suivantes doivent être corrigées : ",
                data: attributeErrors
            };
        }

        const Serveur = await serveur.findOne({
            where: {
                id_serveur: req.body.id_serveur
            }
        })

        if (!Serveur) {
            throw {
                status: 500,
                success: false,
                message: "Erreur lors de la connexion"
            };
        }

        res.status(200).send({
            success: true,
            message: `Serveur trouvé`,
            data: Serveur
        })
    } catch(err) {
        catchError(err, res);
    }
}
