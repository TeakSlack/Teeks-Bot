const { ServerSettings } = require("../../database/models/serverSettings");

module.exports = async (client, message) => {
  if (message.author.bot || message.channel.type !== "text") return;

  let server = await ServerSettings.findOne({
    guildID: message.guild.id,
  });

  if (!message.content.toLowerCase().startsWith(server.prefix)) return;

  const args = message.content
    .toLowerCase()
    .slice(server.prefix.length)
    .split(/ +/);
  const commandName = args.shift();

  const command = client.commands.get(commandName);
  if (!command) return;

  try {
    command.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
};
