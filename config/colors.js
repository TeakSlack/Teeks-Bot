const rc = require('randomcolor');

module.exports = {
  EMBED_SUCCESS: rc({ hue: 'purple', luminosity: 'light' }),
  EMBED_YEILD: rc({ hue: 'yellow', luminosity: 'light' }),
  EMBED_FAIL: rc({ hue: 'red', luminosity: 'light' })
};
