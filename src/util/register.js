const fs = require('fs').promises;
const path = require('path');
const { checkCommand } = require('./check');

// We must do the industrial division of labor mmm yes

// getFiles (recursive) -> registerCommand

const registerCommands = async (dir, client) => {
  await getFiles(dir, client);
};

const getFiles = async (dir, client) => {
  const files = await fs.readdir(path.join(__dirname, dir));

  for (const file of files) {
    const stat = await fs.lstat(path.join(__dirname, dir, file));

    if (stat.isDirectory()) registerCommands(path.join(dir, file), client);
    else {
      await registerCommand(file, dir, client);
    }
  }
};

const registerCommand = async (file, dir, client) => {
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
};

const registerEvents = async (dir, client) => {
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
};

module.exports = {
  registerCommands,
  registerEvents
};
