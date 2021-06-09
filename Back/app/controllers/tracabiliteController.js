const tracabilites = require('../models/index').tracabilite;
const catchError = require('../models/index').catchFunction;

exports.getAll = async (req, res) => {
    try {
        const allTracabilites = await tracabilites.findAll();
        res.status(200).send({
            success: true,
            message: "liste des tracabilites",
            data: allTracabilites
        });
    } catch(err) {
        catchError(err, res);
    }
}
