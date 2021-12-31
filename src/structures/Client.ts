/** @format */

import { Client, ClientEvents, ClientOptions, Collection } from "discord.js";

import { Command, CommandType } from "./Command";

import { Event } from "./Event";

import { readdirSync } from 'fs'

import * as path from 'path'

interface Config {
  prefix: string,
  clientOptions: ClientOptions
}
export class FeroClient extends Client {
  
  constructor(config: Config, token: string) {
    super(config.clientOptions);

    this.config = config;

    this.commands = new Collection();

    this.reload(token);
  }
    config
    commands: Collection<string, CommandType>
  async reload(token: string) {
    // command and event handlers

    // command handler
    readdirSync("./src/commands")
      .filter(file => path.extname(file) === ".ts")
      .forEach(file => {
        const cmd: CommandType = require(path.join(process.cwd(), "src", "commands", file.replace('.ts', '')));

        this.commands.set(cmd.name, cmd);

        console.log(`Command "${cmd.name}" loaded.`);
      });

    // event handler
    readdirSync("./src/events")
      .filter(file => path.extname(file) === ".ts")
      .forEach(file => {
        const event: Event<keyof ClientEvents> = require(path.join(process.cwd(), "src", "events", file.replace('.ts', '')));

        this.on(event.event, event.run.bind(null, this));

        console.log(`Event "${event.event}" loaded.`);
      });

    this.login(token);
  }
}