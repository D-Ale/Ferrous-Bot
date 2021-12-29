/** @format */

const Event = require("../structures/Event.js");

module.exports = new Event("messageCreate", (client, message) => {
  // stop if this message is the bot's message.
  if (message.author.bot) return;

  const prefix = client.config.prefix;

  // stop if this message does not start with the prefix.
  if (!message.content.startsWith(prefix)) return;

  // get the arguments.
  const [cmd, ...args] = message.content.substring(prefix.length).split(/ +/);

  // get the command.
  const command = client.commands.find(
    c =>
      c.name.toLowerCase() ===
      cmd.toLowerCase() /* || c.aliases.map(v => v.toLowerCase()).includes(cmd.toLowerCase()) */
  );

  // stop if the command doesn't exist.
  if (!command) return message.reply(`\`${cmd}\` is not a valid command!`);

  // permissions check

  // run the command.
  command.run(message, args, client);
});
