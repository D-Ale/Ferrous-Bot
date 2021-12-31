/** @format */

console.clear();

const Client = require("./structures/Client.js");

const { existsSync, copyFileSync, writeFileSync } = require("fs");

const { config } = require("dotenv");

if (!existsSync("./.env")) {
  writeFileSync("./.env", "TOKEN = ");
}

config();

if (!existsSync("./src/data/config.json")) {
  copyFileSync("./src/data/exampleconfig.json", "./src/data/config.json");

  console.log("config.json not found, made one for you");
}

const clientConfig = require("./data/config.json");

const client = new Client(clientConfig, process.env.TOKEN);

module.exports = client;
