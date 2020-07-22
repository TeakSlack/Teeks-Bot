const { MessageEmbed } = require('discord.js');
const { EMBED_SUCCESS } = require('../../config/colors');

module.exports.name = 'ping';
module.exports.description =
  'Returns ping of bot, total servers, and total members of the server the command is ran in.';
module.exports.usage = 'ping';
module.exports.category = 'utility';

module.exports.run = async (client, message, args) => {
  const embed = new MessageEmbed()
    .setColor(EMBED_SUCCESS)
    .addField(
      `${client.user.username} ping: `,
      client.ws.ping.toString(),
      false
    )
    .addField('Total Servers: ', client.guilds.cache.size)
    .addField('Total Members', message.guild.memberCount);

  message.channel.send(embed);
};
