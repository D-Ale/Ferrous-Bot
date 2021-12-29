/** @format */

const Command = require("../structures/Command.js");
const {
  default: { get }
} = require("axios");

module.exports = new Command(
  "code",
  "Beautify your code to send here!",
  ["c"],
  async (message, args, client) => {
    const language = args[0] || "js";

    let code = args.slice(1).join(" ");

    if (!code) {
      if (!message.attachments.first())
        return message.reply("You must provide code!");

      code = (await get(message.attachments.first().url)).data;
    }

    const msg = `Code for ${message.member}:\n\`\`\`${language}\n${code}\`\`\``;

    message.delete();

    message.channel.send(msg);
  }
);
