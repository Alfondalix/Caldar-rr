const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send('<h1>Hello Group</h1>');
});

// Buildings routes
app.use('/buildings', require('./controllers/buildings'));

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
});