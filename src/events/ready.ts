/** @format */

import { User } from 'discord.js';
import { Event } from '../structures/Event'

export default new Event("ready", client => {
  console.log(`${(client.user as User).tag} is online!`);
});