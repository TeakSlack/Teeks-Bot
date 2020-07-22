const mongoose = require('mongoose');

const serverSettingsSchema = new mongoose.Schema(
  {
    guildID: Number,
    prefix: String
  },
  {
    collection: 'server'
  }
);

const ServerSettings = mongoose.model('ServerSettings', serverSettingsSchema);

module.exports = {
  ServerSettings
};
