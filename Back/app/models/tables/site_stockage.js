const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('site_stockage', {
    id_site_stockage: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ville: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    pays: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "FRANCE"
    },
    nb_cuve: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'site_stockage',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_site_stockage" },
        ]
      },
      {
        name: "id_site_stockage",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_site_stockage" },
        ]
      },
    ]
  });
};
