const express = require('express');
const routes = require('./server/routes');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

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

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
