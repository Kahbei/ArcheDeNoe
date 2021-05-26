const lots = require('../models/index').lot;
const catchError = require('../models/index').catchFunction;

exports.getAll = async (req, res) => {
    try {
        const allLots = await lots.findAll();
        res.status(200).send({
            success: true,
            message: "liste des lots",
            data: allLots
        });
    } catch(err) {
        catchError(err, res);
    }
}
