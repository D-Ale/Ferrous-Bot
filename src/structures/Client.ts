/** @format */

import { ClientOptions, Client } from 'discord.js'

const Command = require("./Command.js");

const Event = require("./Event.js");

const fs = require("fs");

const path = require("path");

interface Config {
   prefix: string;
   clientOptions: ClientOptions
}

class FeroClient extends Client {
  constructor(config: Config, token: string) {
    super(config.clientOptions);

    this.config = config;

    this.commands: Collection<string, Command> = Collection();

    this.reload(token);
  }

  /**
   * @param {string} token
   * @returns {Promise<string>}
   */
  async reload(token) {
    // command and event handlers

    // command handler
    fs.readdirSync("./src/commands")
      .filter(file => path.extname(file) === ".js")
      .forEach(file => {
        /**
         * @type {Command}
         */
        const cmd = require(path.join(process.cwd(), "src", "commands", file));

        this.commands.set(cmd.name, cmd);

        console.log(`Command "${cmd.name}" loaded.`);
      });

    // event handler
    fs.readdirSync("./src/events")
      .filter(file => path.extname(file) === ".js")
      .forEach(file => {
        /**
         * @type {Event}
         */
        const event = require(path.join(process.cwd(), "src", "events", file));

        this.on(event.event, event.run.bind(null, this));

        console.log(`Event "${event.event}" loaded.`);
      });

    this.login(token);
  }
}

module.exports = Client;
