var DataTypes = require("sequelize").DataTypes;
var _acteur = require("./tables/acteur");
var _alerte = require("./tables/alerte");
var _candidature = require("./tables/candidature");
var _cuve = require("./tables/cuve");
var _espece = require("./tables/espece");
var _lot = require("./tables/lot");
var _personnel = require("./tables/personnel");
var _projet = require("./tables/projet");
var _serveur = require("./tables/serveur");
var _site_stockage = require("./tables/site_stockage");
var _tache_projet = require("./tables/tache_projet");
var _tracabilite = require("./tables/tracabilite");
var _utilisateur = require("./tables/utilisateur");

function initModels(sequelize) {
  var acteur = _acteur(sequelize, DataTypes);
  var alerte = _alerte(sequelize, DataTypes);
  var candidature = _candidature(sequelize, DataTypes);
  var cuve = _cuve(sequelize, DataTypes);
  var espece = _espece(sequelize, DataTypes);
  var lot = _lot(sequelize, DataTypes);
  var personnel = _personnel(sequelize, DataTypes);
  var projet = _projet(sequelize, DataTypes);
  var serveur = _serveur(sequelize, DataTypes);
  var site_stockage = _site_stockage(sequelize, DataTypes);
  var tache_projet = _tache_projet(sequelize, DataTypes);
  var tracabilite = _tracabilite(sequelize, DataTypes);
  var utilisateur = _utilisateur(sequelize, DataTypes);

  candidature.belongsToMany(projet, { through: acteur, foreignKey: "id_candidature", otherKey: "id_projet" });
  projet.belongsToMany(candidature, { through: acteur, foreignKey: "id_projet", otherKey: "id_candidature" });
  candidature.belongsTo(alerte, { as: "id_alerte_alerte", foreignKey: "id_alerte"});
  alerte.hasMany(candidature, { as: "candidatures", foreignKey: "id_alerte"});
  projet.belongsTo(alerte, { as: "id_alerte_alerte", foreignKey: "id_alerte"});
  alerte.hasMany(projet, { as: "projets", foreignKey: "id_alerte"});
  acteur.belongsTo(candidature, { as: "id_candidature_candidature", foreignKey: "id_candidature"});
  candidature.hasMany(acteur, { as: "acteurs", foreignKey: "id_candidature"});
  lot.belongsTo(cuve, { as: "id_cuve_cuve", foreignKey: "id_cuve"});
  cuve.hasMany(lot, { as: "lots", foreignKey: "id_cuve"});
  alerte.belongsTo(espece, { as: "id_espece_espece", foreignKey: "id_espece"});
  espece.hasMany(alerte, { as: "alertes", foreignKey: "id_espece"});
  lot.belongsTo(espece, { as: "id_espece_espece", foreignKey: "id_espece"});
  espece.hasMany(lot, { as: "lots", foreignKey: "id_espece"});
  utilisateur.belongsTo(personnel, { as: "id_personnel_personnel", foreignKey: "id_personnel"});
  personnel.hasMany(utilisateur, { as: "utilisateurs", foreignKey: "id_personnel"});
  acteur.belongsTo(projet, { as: "id_projet_projet", foreignKey: "id_projet"});
  projet.hasMany(acteur, { as: "acteurs", foreignKey: "id_projet"});
  tache_projet.belongsTo(projet, { as: "id_projet_projet", foreignKey: "id_projet"});
  projet.hasMany(tache_projet, { as: "tache_projets", foreignKey: "id_projet"});
  cuve.belongsTo(site_stockage, { as: "id_site_site_stockage", foreignKey: "id_site"});
  site_stockage.hasMany(cuve, { as: "cuves", foreignKey: "id_site"});
  personnel.belongsTo(site_stockage, { as: "id_site_site_stockage", foreignKey: "id_site"});
  site_stockage.hasMany(personnel, { as: "personnels", foreignKey: "id_site"});
  serveur.belongsTo(site_stockage, { as: "id_site_site_stockage", foreignKey: "id_site"});
  site_stockage.hasMany(serveur, { as: "serveurs", foreignKey: "id_site"});
  candidature.belongsTo(utilisateur, { as: "id_utilisateur_utilisateur", foreignKey: "id_utilisateur"});
  utilisateur.hasMany(candidature, { as: "candidatures", foreignKey: "id_utilisateur"});

  return {
    acteur,
    alerte,
    candidature,
    cuve,
    espece,
    lot,
    personnel,
    projet,
    serveur,
    site_stockage,
    tache_projet,
    tracabilite,
    utilisateur,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
