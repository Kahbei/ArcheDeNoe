const tacheProjet = require('../models/index').tache_projet;
const catchError = require('../models/index').catchFunction;

exports.getAll = async (req, res) => {
    try {
        const allTacheProjet = await tacheProjet.findAll();
        res.status(200).send({
            success: true,
            message: "liste des taches",
            data: allTacheProjet
        });
    } catch(err) {
        catchError(err, res);
    }
}
