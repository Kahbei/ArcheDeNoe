const config = require("../config/auth.config.js");
const db = require("../models");

exports.check = (req, res, next) => {
	try {
		if (req.body.appToken == null) {
			throw {
				success: false,
				message: "Il manque le paramètre appToken",
			};
		}
		if (!config.APIkey.includes(req.body.appToken)) {
			throw {
				success: false,
				message: "Le token d'application n'est pas valide",
			};
		}
		next();
	} catch (error) {
		db.catchFunction(error, res);
	}
};