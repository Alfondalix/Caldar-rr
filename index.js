const express = require('express');
const routes = require('./server/routes');

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('<h1>Hello Group</h1>');
});

// Buildings routes
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
