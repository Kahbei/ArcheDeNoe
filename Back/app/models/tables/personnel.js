const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('personnel', {
    id_personnel: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    prenom: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    poste: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
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
    tableName: 'personnel',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_personnel" },
        ]
      },
      {
        name: "id_personnel",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_personnel" },
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
