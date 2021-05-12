const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tracabilite', {
    id_tracabilite: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_lot: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_depart: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    date_arrive: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    adresse_depart: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    adresse_arrive: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tracabilite',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_tracabilite" },
        ]
      },
      {
        name: "id_tracabilite",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_tracabilite" },
        ]
      },
    ]
  });
};
