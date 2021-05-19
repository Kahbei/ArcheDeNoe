const especes = require('../models/index').espece;
const catchError = require('../models/index').catchFunction;

exports.index = async (req, res) => {
    try {
        const allEspeces = await especes.findAll();
        res.status(200).send(allEspeces);
    } catch(err) {
        catchError(err, res);
    }
}
