const Discord = require("discord.js");

let { EMBED_SUCCESS } = require("../../config/colors");
const categories = ["fun", "settings", "utility"];

module.exports.name = "help";
module.exports.description =
  "A command to list all avaliable commands in Teek's bot.";
module.exports.usage = "help <command/category, optional>";
module.exports.category = "utility";

module.exports.run = async (client, message, args) => {
  let embed = new Discord.MessageEmbed();
  embed.setColor(EMBED_SUCCESS);
  embed.setTitle(`Teek's Bot Command List`);

  if (!args[0]) {
    embed.addField("<:lolbruh:734583073575927828> Fun", "`help fun`", true);
    embed.addField(":gear: Settings", "`help settings`", true);
    embed.addField(":tools: Utility", "`help utility`", true);
    embed.setFooter(`${client.commands.size} total commands`);
  }
  await handleArgs(client, embed, args);

  message.channel.send(embed);
};

function addCategory(category, client, args, embed) {
  let commandNames = "";
  if (args[0] === category) {
    client.commands.forEach((value, index, array) => {
      if (value.category === category) {
        commandNames += `\`${value.name}\`, `;
      }
    });
    embed.setDescription(commandNames.substr(0, commandNames.length - 2));
  }
}

async function handleArgs(client, embed, args) {
  if (args[0]) {
    const command = client.commands.get(args[0]);
    if (!command) {
      categories.forEach((v, i, a) => {
        addCategory(categories[i], client, args, embed);
      });
      embed.setFooter(
        "Use help <command> to see the description and usage of any command"
      );
    } else if (args[0] === command.name) {
      embed.addField("Name:", command.name);
      embed.addField("Description:", command.description);
      embed.addField("Usage:", `\`${command.usage}\``);
    }
  }
}
