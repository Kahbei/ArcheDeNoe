const cuve = require('../models/index').cuve;
const catchError = require('../models/index').catchFunction;

exports.getAll = async (req, res) => {
    try {
        const allCuves = await cuve.findAll();
        res.status(200).send({
            success: true,
            message: "liste des espèces",
            data: allCuves
        });
    } catch(err) {
        catchError(err, res);
    }
}
