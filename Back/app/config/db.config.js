module.exports = {
  development: {
    HOST: "87.106.170.98",
    port: "3306",
    USER: "michel",
    PASSWORD: "unMegaMotDePasse_123",
    DB: "pim_arche_noe",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  production: {
    HOST: "87.106.170.98",
    port: "3306",
    USER: "michel",
    PASSWORD: "unMegaMotDePasse_123",
    DB: "pim_arche_noe",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
