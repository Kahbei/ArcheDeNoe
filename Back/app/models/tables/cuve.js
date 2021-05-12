const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cuve', {
    id_cuve: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    libelle: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    id_site: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'site_stockage',
        key: 'id_site_stockage'
      }
    }
  }, {
    sequelize,
    tableName: 'cuve',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cuve" },
        ]
      },
      {
        name: "id_cuve",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cuve" },
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
