const express = require('express');
const router = require('./server/routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
.then(() => {
  console.log("Connected to the database");
})
.catch(err => {
  console.log("Cannot connect to the database", err);
  process.exit();
});

app.use('/api', router);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
