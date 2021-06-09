const acteurs = require('../models/index').acteur;
const catchError = require('../models/index').catchFunction;

exports.getAll = async (req, res) => {
    try {
        const allActeurs = await acteurs.findAll();
        res.status(200).send({
            success: true,
            message: "liste des acteurs",
            data: allActeurs
        });
    } catch(err) {
        catchError(err, res);
    }
}
