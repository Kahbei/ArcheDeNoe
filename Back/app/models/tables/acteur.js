const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acteur', {
    id_projet: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'projet',
        key: 'id_projet'
      }
    },
    id_candidature: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'candidature',
        key: 'id_candidature'
      }
    },
    role: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    narrateur: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'acteur',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_projet" },
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
    ]
  });
};
