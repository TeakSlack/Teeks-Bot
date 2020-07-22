const { MessageEmbed } = require('discord.js');
const { EMBED_SUCCESS } = require('../../config/colors');
const find = require('../../util/redditfindutil');

module.exports.name = 'deepfried';
module.exports.description =
  'A command that returns a deep fried meme from Reddit. True random generated comedy.';
module.exports.usage = 'deepfried';
module.exports.category = 'fun';

module.exports.run = async (client, message, args) => {
  let data = await find('deepfriedmemes');

  let embed = new MessageEmbed()
    .setColor(EMBED_SUCCESS)
    .setTitle(data.title)
    .setURL('https://reddit.com' + data.permalink)
    .setImage(data.url)
    .setFooter('bottom text');
  message.channel.send(embed);
};
