/** @format */

import { Client } from './Client.ts'
import { Message } from 'discord.js'

interface runOptions {
  message: Message,
  client: Client,
  args: string[]
}

function RunFunction(options: runOptions) {}
class Command {
  constructor(name: string, description: string, aliases: string[], run: RunFunction) {
   
    this.name = name;
    this.description = description;
    this.aliases = aliases;
    this.run = run;
  }
}

export Command
