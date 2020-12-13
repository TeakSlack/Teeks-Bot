const { FLAGS } = require('discord.js').Permissions;
const { ServerSettings } = require('../../database/models/serverSettings');

module.exports.name = 'prefix';
module.exports.description =
  "A command used to set the prefix of Teek's bot on the server the command is being used in. Only can be used by server administrators.";
module.exports.usage = 'prefix <new prefix>';
module.exports.category = 'settings';

module.exports.run = async (client, message, args, user) => {
  if (!message.member.permissions.has(FLAGS.ADMINISTRATOR)) {
    message.channel.send(
      `This command can only be used by server administrators, <@${message.member.user.id}>`
    );
    return;
  }

  if (!args[0]) {
    message.channel.send(
      `Specify the bots new prefix, <@${message.member.user.id}>`
    );
    return;
  }

  let server = await ServerSettings.findOne({ guildID: message.guild.id });
  let oldPrefix = server.prefix;

  if (oldPrefix == args[0]) {
    message.channel.send(
      `The bot's prefix already is \`${oldPrefix}\`, <@${message.member.user.id}>`
    );
    return;
  }

  server.prefix = args[0];
  server.save();
  message.channel.send(
    `Server prefix has been updated from \`${oldPrefix}\` to \`${server.prefix}\``
  );
};
