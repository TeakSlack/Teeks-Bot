const { ServerSettings } = require('../../database/models/serverSettings');

module.exports = (client, guild) => {
  const server = new ServerSettings({ guildID: guild.id, prefix: '>' });
  server.save();
};
