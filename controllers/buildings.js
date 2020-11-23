const express = require('express');
const router = express.Router();
const buildings = require('../data/buildings.json');

//get all buildings
router.get('/', (req, res)=> res.send(buildings));

//get building by id
router.get('/by-id/:id', (req, res)=>{
    const found = buildings.some(building => building.idBuilding === parseInt(req.params.id));
    
    if(found){
        res.json(buildings.filter(building => building.idBuilding === parseInt(req.params.id)));
    }
    else{
        res.status(400).json({ msg: `Building with the id of ${req.params.id} does not exist`})
    }
});

// get para ver si tiene company o no, onda filtro, respondiendo a la consigna b 2.
router.get('/by-category/:category', (req, res)=>{
    const found = buildings.some(building => building.category === req.params.category);

    if(found){
        res.json(buildings.filter(building=> building.category === req.params.category));
    }
    else{
        res.status(400).json({ msg: `Building with category ${req.params.category} does not exist`});
    }
})

//Borrar un recurso de la lista y sobreescribir el archivo JSON para actualizarlo
router.delete('/')

module.exports = router;