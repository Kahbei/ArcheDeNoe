const especes = require('../models/index').personnel;
const catchError = require('../models/index').catchFunction;

exports.index = async (req, res) => {
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
