/** @format */

import { Client } from './Client.ts'
import { Message } from 'discord.js'

function RunFunction(message: Message, args: string[], client: Client) {}
class Command {
  constructor(name: string, description: string, aliases: string[], run: RunFunction) {
   
    this.name = name;
    this.description = description;
    this.aliases = aliases;
    this.run = run;
  }
}

export Command
