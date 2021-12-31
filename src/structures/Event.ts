/** @format */

import { ClientEvents } from 'discord.js'

import { FeroClient } from './Client.js'

export class Event<K extends keyof ClientEvents> {
  constructor(
    public event: K,
    public run: (client: FeroClient, ...args: ClientEvents[K]) => any
  ){}
}
