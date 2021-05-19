// Require
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const especeRoute = require("./app/router/especeRoute");

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
app.use("/especes/", especeRoute);

// set port, listen for requests
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
