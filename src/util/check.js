module.exports.checkCommand = (fileName, command) => {
  if (!command.hasOwnProperty('name'))
    throw new Error(`${fileName} does not have property of name!`);
  if (!command.hasOwnProperty('run'))
    throw new Error(`${fileName} does not have property of run!`);
  if (!command.hasOwnProperty('description'))
    throw new Error(`${fileName} does not have property of description!`);
  if (!command.hasOwnProperty('usage'))
    throw new Error(`${fileName} does not have property of usage!`);
  if (!command.hasOwnProperty('category'))
    throw new Error(`${fileName} does not have property of category!`);

  if (typeof command.name !== 'string')
    throw new Error(`Name is not a string!`);
  if (typeof command.run !== 'function')
    throw new Error(`Run is not a function!`);
  if (typeof command.description !== 'string')
    throw new Error(`Description is not a string!`);
  if (typeof command.usage !== 'string')
    throw new Error(`Usage is not a string!`);
  if (typeof command.category !== 'string')
    throw new Error(`Category is not a string!`);
  return true;
};
