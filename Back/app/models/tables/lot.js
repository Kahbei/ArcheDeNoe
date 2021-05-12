const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lot', {
    id_lot: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    id_espece: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'espece',
        key: 'id_espece'
      }
    },
    id_cuve: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cuve',
        key: 'id_cuve'
      }
    },
    nom: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'lot',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_lot" },
        ]
      },
      {
        name: "id_lot",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_lot" },
        ]
      },
      {
        name: "id_espece",
        using: "BTREE",
        fields: [
          { name: "id_espece" },
        ]
      },
      {
        name: "id_cuve",
        using: "BTREE",
        fields: [
          { name: "id_cuve" },
        ]
      },
    ]
  });
};
