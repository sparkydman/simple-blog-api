const mongoose = require('mongoose');

const connect = (url) => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to db...'))
    .catch((err) => console.log(err));
};

const disconnect = () => {
  mongoose.connection.close();
};

module.exports = Object.freeze({
  connect,
  disconnect,
});
