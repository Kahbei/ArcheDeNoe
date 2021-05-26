const utilisateurs = require('../models/index').utilisateur;
const catchError = require('../models/index').catchFunction;

exports.getAll = async (req, res) => {
    try {
        const allUtilisateurs = await utilisateurs.findAll();
        res.status(200).send({
            success: true,
            message: "liste des utilisateurs",
            data: allUtilisateurs
        });
    } catch(err) {
        catchError(err, res);
    }
}

exports.getOne = async (req, res) => {
    try {
        // init du tableau d'erreur
        let attributeErrors = [];

        if (!req.body.login) {
            attributeErrors.push("L'attribut \"login\" n'est pas défini")
        } else if (typeof req.body.login !== "string") {
            attributeErrors.push("L'attribut \"login\" n'est pas un string")
        }

        if (!req.body.password) {
            attributeErrors.push("L'attribut \"password\" n'est pas défini")
        } else if (typeof req.body.password !== "string") {
            attributeErrors.push("L'attribut \"password\" n'est pas un string")
        }

        if (attributeErrors.length > 0) {
            throw {
                status: 400,
                success: false,
                message: "Les erreurs suivantes doivent être corrigées : ",
                data: attributeErrors
            };
        }

        const Utilisateur = await utilisateurs.findOne({
            where: {
                login: req.body.login,
                password: req.body.password
            }
        })

        if (!Utilisateur) {
            throw {
                status: 500,
                success: false,
                message: "Erreur lors de la connexion"
            };
        }

        res.status(200).send({
            success: true,
            message: `Bienvenue ${req.body.login} !`,
            data: {admin : Utilisateur.admin, id_personnel: Utilisateur.id_personnel}
        })
    } catch (err) {
        catchError(err, res)
    }
}
