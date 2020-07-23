const util = require('../../util/imageutil');

module.exports.name = 'greyscale';
module.exports.description = 'Takes the attached image and turns it greyscale';
module.exports.usage = 'greyscale <image url or attached image>';
module.exports.category = 'image';

module.exports.run = async (client, message, args, user) => {
  let image = await util.getImage(message, args, user);
  image.greyscale();

  let buffer = await util.sendImage(image, message);
  util.cacheLastImage(buffer, user);
};
