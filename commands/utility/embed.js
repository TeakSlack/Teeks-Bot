const {
  EMBED_SUCCESS,
  EMBED_YEILD,
  EMBED_FAIL
} = require('../../config/colors');
const { MessageEmbed } = require('discord.js');

module.exports.name = 'embed';
module.exports.description =
  'A test for the different embed colors of this bot';
module.exports.usage = 'embed <success, yeild, fail>';
module.exports.category = 'utility';

module.exports.run = (client, message, args) => {
  if (!args[0]) return;

  const embed = new MessageEmbed();

  if (args[0] === 'success') {
    embed.setColor(EMBED_SUCCESS);
    embed.setTitle(`Success: ${EMBED_SUCCESS}`);
    embed.setURL('https://coolors.co/2b3578-f291b2-9a5b5f');
  } else if (args[0] === 'yeild') {
    embed.setColor(EMBED_YEILD);
    embed.setTitle(`Yeild: ${EMBED_YEILD}`);
    embed.setURL('https://coolors.co/2b3578-f291b2-9a5b5f');
  } else if (args[0] === 'fail') {
    embed.setColor(EMBED_FAIL);
    embed.setTitle(`Fail: ${EMBED_FAIL}`);
    embed.setURL('https://coolors.co/2b3578-f291b2-9a5b5f');
  }

  message.channel.send(embed);
};
