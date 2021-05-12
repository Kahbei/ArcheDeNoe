const env = process.env.NODE_ENV || "development";
const dbConfig = require("../config/db.config.js")[env];

const initModels = require("./init-models");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
  // Enlever les logs de création de table au lancement du serveur
  logging: false,
});

const db = {};

// Classe Sequelize
db.Sequelize = Sequelize;
// Instance sequelize
db.sequelize = sequelize;

models = models.initModels(sequelize);

// models
db.acteur = models.acteur;
db.alerte = models.alerte;
db.candidature = models.candidature;
db.cuve = models.cuve;
db.espece = models.espece;
db.lot = models.lot;
db.personnel = models.personnel;
db.projet = models.projet;
db.serveur = models.serveur;
db.site_stockage = models.site_stockage;
db.tache_projet = models.tache_projet;
db.tracabilite = models.tracabilite;
db.utilisateur = models.utilisateur;

db.catchFunction = (err, res) => {
  if (err.data) {
    res.status(err.status || 500).send({
      success: err.success || false,
      message: err.message || "Une erreur a eu lieu",
      data: err.data,
    });
  } else {
    res.status(err.status || 500).send({
      success: err.success || false,
      message: err.message || "Une erreur a eu lieu",
    });
  }
};

module.exports = db;
