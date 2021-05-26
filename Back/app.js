// Require
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const acteurRoute = require("./app/routes/acteurRoute");
const alerteRoute = require("./app/routes/alerteRoute");
const especeRoute = require("./app/routes/especeRoute");
const lotRoute = require("./app/routes/lotRoute");
const projetRoute = require("./app/routes/projetRoute");
const siteStockageRoute = require("./app/routes/siteStockageRoute");
const tracabiliteRoute = require("./app/routes/tracabiliteRoute");
const utilisateurRoute = require("./app/routes/utilisateurRoute");

// Take middleware index
const middleware = require("./app/middleware");

// Create app
const app = express();

// Middleware
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(middleware.checkAppToken);

// database
const db = require("./app/models");
db.sequelize.sync();

// Route de base (par défaut)
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to PIM backend"});
})

// Routes
// Exemple :
app.use("/alertes/", alerteRoute);
app.use("/acteurs/", acteurRoute);
app.use("/especes/", especeRoute);
app.use("/lots/", lotRoute);
app.use("/projets/", projetRoute);
app.use("/site_stockages/", siteStockageRoute);
app.use("/tracabilites/", tracabiliteRoute);
app.use("/utilisateurs/", utilisateurRoute);

// set port, listen for requests
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
