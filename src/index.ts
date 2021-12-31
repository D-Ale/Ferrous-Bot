/** @format */

console.clear();

import { FeroClient } from "./structures/Client";
import { config } from "dotenv";
import { existsSync, copyFileSync } from "fs";
config();
if (!process.env.token) throw new Error("You must put a token!");

if (!existsSync("./src/data/config.json")) {
  copyFileSync("./src/data/exampleconfig.json", "./src/data/config.json");

  console.log("config.json not found, made one for you");
}

import clientConfig from "./data/config.json";

const client = new FeroClient(clientConfig, process.env.TOKEN);

export default client;
