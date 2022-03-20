/* require dependencies */
const { Sequelize } = require("sequelize");
const dotenv = require("dotenv").config();
const databaseConfiguration = require("./config/dbconfig.js");

/* important inits */
const sequelize = new Sequelize(databaseConfiguration.production);

/* exports */
module.exports.sequelize = sequelize;