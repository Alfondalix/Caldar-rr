const express = require('express');
const buildings = require('./data/buildings.json');

const app = express();
const port = process.env.PORT || 5000;


//get all buildings
app.get('/buildings', (req, res)=> res.send(buildings));

//get building by id
app.get('/buildings/:id', (req, res)=>{
    res.json(buildings.filter(building=> building.idBuilding === parseInt(req.params.id)));
});
// get para ver si tiene company o no, onda filtro, respondiendo a la consigna b 2.

//Borrar un recurso de la lista y sobreescribir el archivo JSON para actualizarlo

app.get('/', (req, res)=>{
    res.send('<h1>Hello Group</h1>');
});

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
});