const find = require('../../util/redditfindutil');
const { MessageEmbed } = require('discord.js');
const { EMBED_SUCCESS } = require('../../config/colors');

module.exports.name = 'imsorryjon';
module.exports.description =
  "A command that returns an image off of the I'm Sorry Jon subreddit. Not for the faint of heart.";
module.exports.usage = 'imsorryjon';
module.exports.category = 'fun';

module.exports.run = async (client, message, args, user) => {
  let data = await find('imsorryjon');

  let embed = new MessageEmbed()
    .setColor(EMBED_SUCCESS)
    .setTitle(data.title)
    .setURL('https://reddit.com' + data.permalink)
    .setImage(data.url)
    .setFooter("i'm sorry.");
  message.channel.send(embed);
};
