const projets = require('../models/index').projet;
const catchError = require('../models/index').catchFunction;

exports.getAll = async (req, res) => {
    try {
        const allProjets = await projets.findAll();
        res.status(200).send({
            success: true,
            message: "liste des projets",
            data: allProjets
        });
    } catch(err) {
        catchError(err, res);
    }
}
