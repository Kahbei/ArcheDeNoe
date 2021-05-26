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
