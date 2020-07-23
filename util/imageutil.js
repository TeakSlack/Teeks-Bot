const jimp = require('jimp');
const validator = require('validator').default;
const { MessageAttachment } = require('discord.js');

module.exports.getURL = (message, args, user) => {
  try {
    if (message.attachments.first()) {
      return message.attachments.first().url;
    } else if (args[0] && validator.isURL(args[0])) {
      if (args[0].match(/\w+\.(jpg|jpeg|gif|png|tiff|bmp)$/gi)) {
        return args[0];
      }
    } else if (!args[0]) {
      let buffer = user.lastResponseWithImage;
      if (buffer) return buffer;
      else message.channel.send('Send an image first!');
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports.getImage = async (message, args, user) => {
  let jimpStream;
  let imageURL = this.getURL(message, args, user);
  if (imageURL) {
    try {
      jimpStream = await jimp.read(imageURL);
      return jimpStream;
    } catch (err) {
      console.error(err);
    }
  }
};

module.exports.sendImage = async (image, message) => {
  let buffer = await image.getBufferAsync(jimp.MIME_PNG);
  let attachment = new MessageAttachment(buffer);
  message.channel.send(attachment);
  return buffer;
};

module.exports.cacheLastImage = async (imageBuffer, user) => {
  user.lastResponseWithImage = imageBuffer;
  user.save();
};
