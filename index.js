const express = require('express');
const routes = require('./server/routes');

const app = express();
const port = process.env.PORT || 5000;

const db = require('./server/models')

db.mongoose
    .connect(db.url, {
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

app.get('/', (req, res) => {
    res.send('<h1>Hello Group</h1>');
});

// Buildings routes
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
