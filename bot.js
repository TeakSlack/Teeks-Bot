require("dotenv").config();
const Discord = require("discord.js");
const config = require("./config/config");
const { registerCommands, registerEvents } = require("./util/register");
const { connectDB } = require("./database/database");

const client = new Discord.Client();

(async () => {
  client.login(process.env.DISCORD_TOKEN);
  client.commands = new Discord.Collection();

  await connectDB(client);
  await registerCommands("../commands/", client);
  await registerEvents("../events/discord", client);
})();
