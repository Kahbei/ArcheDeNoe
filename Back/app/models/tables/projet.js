const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projet', {
    id_projet: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_alerte: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'alerte',
        key: 'id_alerte'
      }
    },
    livre_sauvetage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    titre: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'projet',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_projet" },
        ]
      },
      {
        name: "id_projet",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_projet" },
        ]
      },
      {
        name: "id_alerte",
        using: "BTREE",
        fields: [
          { name: "id_alerte" },
        ]
      },
    ]
  });
};
