const { ServerSettings } = require('../../database/models/serverSettings');
const { User } = require('../../database/models/user');

module.exports = async (client, message) => {
  if (message.author.bot || message.channel.type !== 'text') return;

  let server = await ServerSettings.findOne({
    guildID: message.guild.id
  });

  if (!message.content.toLowerCase().startsWith(server.prefix)) return;

  const args = message.content
    .toLowerCase()
    .slice(server.prefix.length)
    .split(/ +/);
  const commandName = args.shift();

  const command = client.commands.get(commandName);
  if (!command) return;

  let user = await User.findOne({ userID: message.author.id });

  if (!user) {
    let newUser = new User({
      userID: message.author.id,
      username: message.author.username,
      lastResponseWithImage: null,
      points: 0
    });
    newUser.save();
    console.log('new user created');
  }

  try {
    user.points += 1;
    command.run(client, message, args, user);
  } catch (err) {
    console.error(err);
  }
};
