const { MessageEmbed } = require('discord.js');
const { EMBED_SUCCESS } = require('../../config/colors');

module.exports.name = 'ping';
module.exports.description =
  'Returns ping of bot, total servers, and total members of the server the command is ran in.';
module.exports.usage = 'ping';
module.exports.category = 'utility';

module.exports.run = async (client, message, args, user) => {
  const embed = new MessageEmbed()
    .setColor(EMBED_SUCCESS)
    .addField(
      `${client.user.username} ping: `,
      client.ws.ping.toString(),
      false
    );

  message.channel.send(embed);
};
