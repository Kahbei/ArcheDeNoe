const personnel = require('../models/index').personnel;
const catchError = require('../models/index').catchFunction;

exports.getAll = async (req, res) => {
    try {
        const allPersonnel = await personnel.findAll();
        res.status(200).send({
            success: true,
            message: "liste du personnel",
            data: allPersonnel
        });
    } catch(err) {
        catchError(err, res);
    }
}
