const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alerte', {
    id_alerte: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_espece: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'espece',
        key: 'id_espece'
      }
    },
    libelle: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    alerte_fini: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    date_creation: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0001-01-01"
    },
    date_modification: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'alerte',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_alerte" },
        ]
      },
      {
        name: "id_alerte",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_alerte" },
        ]
      },
      {
        name: "id_espece",
        using: "BTREE",
        fields: [
          { name: "id_espece" },
        ]
      },
    ]
  });
};
