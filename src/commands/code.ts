/** @format */
import { MessageAttachment } from "discord.js";
import { Command } from "../structures/Command"
const {
  default: { get }
} = require("axios");
export default new Command({ 
  name: "code",
  description: "Beautify your code to send here!",
  aliases: ["c"],
  run: async ({message, args, client}) => {
    const language = args[0] || "js";
    let code = args.slice(1).join(" ");

    if (!code) {
      if (!message.attachments.first())
        return message.reply("You must provide code!");
      if (message.attachments){
        code = (await get((message.attachments.first() as MessageAttachment).url)).data;
      }
    }

    const msg = `Code for ${message.member}:\n\`\`\`${language}\n${code}\`\`\``;

    message.delete();

    message.channel.send(msg);
  }
})