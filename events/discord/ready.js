module.exports = async (client) => {
  console.log(`${client.user.username} is ready!`);

  client.user.setActivity('indev 0.1 | >help', { type: 'WATCHING' });
};
