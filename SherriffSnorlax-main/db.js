const Sequelize = require("sequelize");
const dotenv = require("dotenv").config();
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "sqlite",
  logging: false,
  // SQLite only
  storage: "database.sqlite",
});

const FriendCodes = sequelize.define("friendcodes", {
  username: { type: Sequelize.STRING, unique: true },
  pogocode: Sequelize.STRING,
});

module.exports = FriendCodes;
