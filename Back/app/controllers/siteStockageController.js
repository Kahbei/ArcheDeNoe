const site_stockages = require('../models/index').site_stockage;
const catchError = require('../models/index').catchFunction;

exports.getAll = async (req, res) => {
    try {
        const allSite_stockages = await site_stockages.findAll();
        res.status(200).send({
            success: true,
            message: "liste des site_stockages",
            data: allSite_stockages
        });
    } catch(err) {
        catchError(err, res);
    }
}
