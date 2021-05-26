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
