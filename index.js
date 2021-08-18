const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotevn = require('dotenv');

dotevn.config({ path: './.env' });

const db = require('./db/db');

const url = 'mongodb://localhost:27017/simple-blog';

db.connect(url);

const app = express();

app.use(express.json());

app.use(cors('*'));

app.use(morgan('dev'));

app.use('/posts', require('./router/post'));
app.use('/comments', require('./router/comment'));
app.use('/users', require('./router/user'));

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App is running in port ${PORT}`);
});
