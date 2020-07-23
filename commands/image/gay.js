const jimp = require('jimp');
const util = require('../../util/imageutil');

module.exports.name = 'gay';
module.exports.description = 'Overlays a pride flag onto any attached image.';
module.exports.usage = 'gay <image url or attached image>';
module.exports.category = 'image';

module.exports.run = async (client, message, args, user) => {
  let img = await util.getImage(message, args, user);
  let gay = await jimp.read('./util/images/gay.png');
  gay.resize(img.getWidth(), img.getHeight());
  gay.composite(img, 0, 0, { opacitySource: 0.75 });

  let buffer = await util.sendImage(gay, message);
  util.cacheLastImage(buffer, user);
};
