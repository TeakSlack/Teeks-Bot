const util = require('../../util/imageUtil');

module.exports.name = 'emboss';
module.exports.description =
  'Emboss an inputted image through a convolution matrix.';
module.exports.usage = 'emboss <image url or attached image>';
module.exports.category = 'image';

module.exports.run = async (client, message, args, user) => {
  let image = await util.getImage(message, args, user);
  image.convolute([
    [-2, -1, 0],
    [-1, 1, 1],
    [0, 1, 2]
  ]);

  let buffer = await util.sendImage(image, message);
  util.cacheLastImage(buffer, user);
};
