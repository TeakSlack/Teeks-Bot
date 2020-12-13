import { MessageEmbed, Message, Client } from 'discord.js';
import { EMBED_SUCCESS } from '../../config/colors';
import find from '../../util/redditFindUtil';

module.exports.name = 'deepfried';
module.exports.description =
  'A command that returns a deep fried meme from Reddit. True random generated comedy.';
module.exports.usage = 'deepfried';
module.exports.category = 'fun';

module.exports.run = async (
  client: Client,
  message: Message,
  args: any,
  user: any
) => {
  let data = await find('deepfriedmemes');

  let embed = new MessageEmbed()
    .setColor(EMBED_SUCCESS)
    .setTitle(data.title)
    .setURL('https://reddit.com' + data.permalink)
    .setImage(data.url)
    .setFooter('bottom text');
  message.channel.send(embed);
};
