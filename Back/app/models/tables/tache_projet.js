const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tache_projet', {
    id_tache_projet: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_projet: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'projet',
        key: 'id_projet'
      }
    },
    libelle: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    realiser: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tache_projet',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_tache_projet" },
        ]
      },
      {
        name: "id_tache_projet",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_tache_projet" },
        ]
      },
      {
        name: "id_projet",
        using: "BTREE",
        fields: [
          { name: "id_projet" },
        ]
      },
    ]
  });
};
