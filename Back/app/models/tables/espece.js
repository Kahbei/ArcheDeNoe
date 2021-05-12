const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('espece', {
    id_espece: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "nom"
    },
    genre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    famille: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ordre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    classe: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    embranchement: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    regne: {
      type: DataTypes.ENUM('Archaea','Bacteria','Protozoa','Chromista','Plantae','Fungi','Animalia'),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'espece',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_espece" },
        ]
      },
      {
        name: "id_espece",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_espece" },
        ]
      },
      {
        name: "nom",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nom" },
        ]
      },
    ]
  });
};
