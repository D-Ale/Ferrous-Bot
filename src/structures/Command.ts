          mn mmn/** @format */

import { FeroClient } from './Client'
import { Message } from 'discord.js'

interface RunOptions {
  message: Message,
  client: FeroClient,
  args: string[]
}

type RunFunction = (options: RunOptions) => any;

export type CommandType = {
  name: string;
  description?: string;
  aliases?: string[],
  run: RunFunction
}

export class Command  {
  constructor (commandOptions: CommandType){
    Object.assign(this, commandOptions)
  }
}
