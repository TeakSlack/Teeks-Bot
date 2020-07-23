const util = require('../../util/imageutil');

module.exports.name = 'greyscale';
module.exports.description = 'Takes the attached image and turns it greyscale';
module.exports.usage = 'greyscale <image url or attached image>';
module.exports.category = 'image';

module.exports.run = async (client, message, args) => {
  let image = await util.getImage(message, args);
  image.greyscale();

  util.sendImage(image, message);
};
