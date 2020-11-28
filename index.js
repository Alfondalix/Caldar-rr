const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send('<h1>Hello Group</h1>');
});

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
});