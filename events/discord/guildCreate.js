const { ServerSettings } = require("../../database/models/serverSettings");

module.exports = (client, guild) => {
  console.log("New server joined!");
  const server = new ServerSettings({ guildID: guild.id, prefix: ">" });
  server.save();
};
