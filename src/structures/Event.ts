/** @format */

import { ClientEvents } from 'discord.js'

import { Client } from './Client.js'

class Event<K extends keyof ClientEvents> {
  constructor(
    public event: K;
    public run: (client: Client, ...args: ClientEvents[K]) => any
  ){}
}

export Event
