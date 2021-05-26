const utilisateurs = require('../models/index').utilisateur;
const catchError = require('../models/index').catchFunction;

exports.getAll = async (req, res) => {
    try {
        const allUtilisateurs = await utilisateurs.findAll();
        res.status(200).send({
            success: true,
            message: "liste des utilisateurs",
            data: allUtilisateurs
        });
    } catch(err) {
        catchError(err, res);
    }
}
