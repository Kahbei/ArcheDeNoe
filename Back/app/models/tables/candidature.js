const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('candidature', {
    id_candidature: {
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
    id_utilisateur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'utilisateur',
        key: 'id_utilisateur'
      }
    },
    lettre_motivation: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'candidature',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_candidature" },
        ]
      },
      {
        name: "id_candidature",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_candidature" },
        ]
      },
      {
        name: "id_alerte",
        using: "BTREE",
        fields: [
          { name: "id_alerte" },
        ]
      },
      {
        name: "id_utilisateur",
        using: "BTREE",
        fields: [
          { name: "id_utilisateur" },
        ]
      },
    ]
  });
};
