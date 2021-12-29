/** @format */

const Client = require("./Client.js");
const Discord = require("discord.js");

/**
 * @param {Discord.Message} message
 * @param {string[]} args
 * @param {Client} client
 */
function RunFunction(message, args, client) {}
class Command {
  /**
   * @param {string} name
   * @param {string} description
   * @param {string[]} aliases
   * @param {RunFunction} run
   */
  constructor(name, description, aliases, run) {
    /**
     * @type {string}
     */
    this.name = name;
    /**
     * @type {string}
     */
    this.description = description;
    /**
     * @type {string[]}
     */
    this.aliases = aliases;
    /**
     * @type {RunFunction}
     */
    this.run = run;
  }
}

module.exports = Command;
