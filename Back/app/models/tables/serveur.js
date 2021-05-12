const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('serveur', {
    id_serveur: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ip: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "ip"
    },
    designation: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    taille: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_site: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'site_stockage',
        key: 'id_site_stockage'
      }
    }
  }, {
    sequelize,
    tableName: 'serveur',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_serveur" },
        ]
      },
      {
        name: "id_serveur",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_serveur" },
        ]
      },
      {
        name: "ip",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ip" },
        ]
      },
      {
        name: "id_site",
        using: "BTREE",
        fields: [
          { name: "id_site" },
        ]
      },
    ]
  });
};
