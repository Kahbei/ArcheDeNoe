const especes = require('../models/index').espece;
const catchError = require('../models/index').catchFunction;

exports.getAll = async (req, res) => {
    try {
        const allEspeces = await especes.findAll();
        res.status(200).send({
            success: true,
            message: "liste des espèces",
            data: allEspeces
        });
    } catch(err) {
        catchError(err, res);
    }
}

exports.getOne = async (req,res) => {
    try {
        // init du tableau d'erreur
        let attributeErrors = [];

        if (!req.body.id_espece) {
            attributeErrors.push("L'attribut \"id_espece\" n'est pas défini")
        } else if (typeof req.body.id_espece !== "number") {
            attributeErrors.push("L'attribut \"id_espece\" n'est pas un number")
        }

        if (attributeErrors.length > 0) {
            throw {
                status: 400,
                success: false,
                message: "Les erreurs suivantes doivent être corrigées : ",
                data: attributeErrors
            };
        }

        const Espece = await especes.findOne({
            where: {
                id_espece: req.body.id_espece
            }
        })

        if (!Espece) {
            throw {
                status: 500,
                success: false,
                message: "Erreur lors de la connexion"
            };
        }

        res.status(200).send({
            success: true,
            message: `Espèce trouvée`,
            data: Espece
        })
    } catch(err) {
        catchError(err, res);
    }
}

exports.createOne = async (req, res) => {
    try {
        // init du tableau d'erreur
        let attributeErrors = [];

        if (!req.body.nom) {
            attributeErrors.push("L'attribut \"nom\" n'est pas défini")
        } else if (typeof req.body.nom !== "string") {
            attributeErrors.push("L'attribut \"nom\" n'est pas un string")
        }

        if (!req.body.genre) {
            attributeErrors.push("L'attribut \"genre\" n'est pas défini")
        } else if (typeof req.body.genre !== "string") {
            attributeErrors.push("L'attribut \"genre\" n'est pas un string")
        }

        if (!req.body.famille) {
            attributeErrors.push("L'attribut \"famille\" n'est pas défini")
        } else if (typeof req.body.famille !== "string") {
            attributeErrors.push("L'attribut \"famille\" n'est pas un string")
        }

        if (!req.body.ordre) {
            attributeErrors.push("L'attribut \"ordre\" n'est pas défini")
        } else if (typeof req.body.ordre !== "string") {
            attributeErrors.push("L'attribut \"ordre\" n'est pas un string")
        }

        if (!req.body.classe) {
            attributeErrors.push("L'attribut \"classe\" n'est pas défini")
        } else if (typeof req.body.classe !== "string") {
            attributeErrors.push("L'attribut \"classe\" n'est pas un string")
        }

        if (!req.body.embranchement) {
            attributeErrors.push("L'attribut \"embranchement\" n'est pas défini")
        } else if (typeof req.body.embranchement !== "string") {
            attributeErrors.push("L'attribut \"embranchement\" n'est pas un string")
        }

        if (!req.body.regne) {
            attributeErrors.push("L'attribut \"regne\" n'est pas défini")
        } else if (typeof req.body.regne !== "string") {
            attributeErrors.push("L'attribut \"regne\" n'est pas un string")
        }

        if (attributeErrors.length > 0) {
            throw {
                status: 400,
                success: false,
                message: "Les erreurs suivantes doivent être corrigées : ",
                data: attributeErrors
            };
        }

        const CreateEspece = await especes.create({
            nom: req.body.nom,
            genre: req.body.genre,
            famille: req.body.famille,
            ordre: req.body.ordre,
            classe: req.body.classe,
            embranchement: req.body.embranchement,
            regne: req.body.regne
        })

        if (!CreateEspece) {
            throw {
                status: 500,
                success: false,
                message: "Erreur lors de la création"
            };
        }

        res.status(200).send({
            success: true,
            message: `L'espèce "${req.body.nom}" a été créée avec succès !`,
            data: CreateEspece
        })

    } catch(err) {
        catchError(err, res);
    }
}

exports.updateOne = async (req, res) => {
    try {
        // init du tableau d'erreur
        let attributeErrors = [];

        if (!req.body.id_espece) {
            attributeErrors.push("L'attribut \"id_espece\" n'est pas défini")
        } else if (typeof req.body.id_espece !== "number") {
            attributeErrors.push("L'attribut \"id_espece\" n'est pas un number")
        }

        if (!req.body.nom) {
            attributeErrors.push("L'attribut \"nom\" n'est pas défini")
        } else if (typeof req.body.nom !== "string") {
            attributeErrors.push("L'attribut \"nom\" n'est pas un string")
        }

        if (!req.body.genre) {
            attributeErrors.push("L'attribut \"genre\" n'est pas défini")
        } else if (typeof req.body.genre !== "string") {
            attributeErrors.push("L'attribut \"genre\" n'est pas un string")
        }

        if (!req.body.famille) {
            attributeErrors.push("L'attribut \"famille\" n'est pas défini")
        } else if (typeof req.body.famille !== "string") {
            attributeErrors.push("L'attribut \"famille\" n'est pas un string")
        }

        if (!req.body.ordre) {
            attributeErrors.push("L'attribut \"ordre\" n'est pas défini")
        } else if (typeof req.body.ordre !== "string") {
            attributeErrors.push("L'attribut \"ordre\" n'est pas un string")
        }

        if (!req.body.classe) {
            attributeErrors.push("L'attribut \"classe\" n'est pas défini")
        } else if (typeof req.body.classe !== "string") {
            attributeErrors.push("L'attribut \"classe\" n'est pas un string")
        }

        if (!req.body.embranchement) {
            attributeErrors.push("L'attribut \"embranchement\" n'est pas défini")
        } else if (typeof req.body.embranchement !== "string") {
            attributeErrors.push("L'attribut \"embranchement\" n'est pas un string")
        }

        if (!req.body.regne) {
            attributeErrors.push("L'attribut \"regne\" n'est pas défini")
        } else if (typeof req.body.regne !== "string") {
            attributeErrors.push("L'attribut \"regne\" n'est pas un string")
        }

        if (attributeErrors.length > 0) {
            throw {
                status: 400,
                success: false,
                message: "Les erreurs suivantes doivent être corrigées : ",
                data: attributeErrors
            };
        }


        const EspeceUpdate = await especes.update(
            {
                nom: req.body.nom,
                genre: req.body.genre,
                famille: req.body.famille,
                ordre: req.body.ordre,
                classe: req.body.classe,
                embranchement: req.body.embranchement,
                regne: req.body.regne
            },
            {
                where: {
                    id_espece: req.body.id_espece
                }
            }
        )

        if (!EspeceUpdate) {
            throw {
                status: 500,
                success: false,
                message: "Erreur lors de la connexion"
            };
        }

        res.status(200).send({
            success: true,
            message: `Espèce modifiée`,
        })
    } catch(err) {
        catchError(err, res);
    }
}
