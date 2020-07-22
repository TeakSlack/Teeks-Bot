const { ServerSettings } = require("../../database/models/serverSettings");

module.exports = async (client, guild) => {
  const server = await ServerSettings.findOne({ guildID: guild.id });
  server.remove();
};
