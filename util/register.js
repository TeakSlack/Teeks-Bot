const fs = require('fs').promises;
const path = require('path');
const { checkCommand } = require('./check');

async function registerCommands(dir, client) {
  const files = await fs.readdir(path.join(__dirname, dir));

  for (const file of files) {
    const stat = await fs.lstat(path.join(__dirname, dir, file));

    if (stat.isDirectory()) registerCommands(path.join(dir, file), client);
    else {
      if (file.endsWith('.js')) {
        const fileName = file.substring(0, file.indexOf('.js'));

        try {
          const command = require(path.join(__dirname, dir, file));
          if (checkCommand(fileName, command)) {
            client.commands.set(command.name, command);
          }
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
}

async function registerEvents(dir, client) {
  const files = await fs.readdir(path.join(__dirname, dir));

  for (const file of files) {
    const stat = await fs.lstat(path.join(__dirname, dir, file));

    if (stat.isDirectory()) registerEvents(path.join(dir, file), client);
    else {
      if (file.endsWith('.js')) {
        const fileName = file.substring(0, file.indexOf('.js'));
        try {
          const event = require(path.join(__dirname, dir, file));
          client.on(fileName, event.bind(null, client));
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
}

module.exports = {
  registerCommands,
  registerEvents
};
