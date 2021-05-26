const alertes = require('../models/index').alerte;
const catchError = require('../models/index').catchFunction;

exports.getAll = async (req, res) => {
    try {
        const allAlertes = await alertes.findAll();
        res.status(200).send({
            success: true,
            message: "liste des alertes",
            data: allAlertes
        });
    } catch(err) {
        catchError(err, res);
    }
}
