const { ServerSettings } = require("../../database/models/serverSettings");

module.exports = async (client, guild) => {
  console.log("server left lol");
  const server = await ServerSettings.findOne({ guildID: guild.id });
  server.remove();
};
