const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_USER, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let db = mongoose.connection;

async function connectDB(client) {
  client.db = db;
}

db.on('open', () => {
  console.log('Database has connected!');
});

module.exports = {
  connectDB
};
