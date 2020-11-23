const express = require('express');
const router = express.Router();
const buildings = require('../data/buildings.json');

const fs = require('fs');
//get all buildings.
router.get('/', (req, res)=> res.send(buildings));

//get building by id.
router.get('/by-id/:id', (req, res)=>{
    const found = buildings.some(building => building.idBuilding === parseInt(req.params.id));
    
    if(found){
        res.json(buildings.filter(building => building.idBuilding === parseInt(req.params.id)));
    }
    else{
        res.status(400).json({ msg: `Building with the id of ${req.params.id} does not exist`})
    }
});

// get building by category (particular or company).
router.get('/by-category/:category', (req, res)=>{
    const found = buildings.some(building => building.category === req.params.category);

    if(found){
        res.json(buildings.filter(building=> building.category === req.params.category));
    }
    else{
        res.status(400).json({ msg: `Building with category ${req.params.category} does not exist`});
    }
})

// delete building and update json file.
router.delete('/delete-by-id/:id', (req, res)=>{
    const data = JSON.parse(fs.readFileSync('data/buildings.json'));
    fs.writeFileSync('data/buildings.json', JSON.stringify(data.filter(building=> building.idBuilding !== parseInt(req.params.id))));
    res.json(data.filter(building=> building.idBuilding !== parseInt(req.params.id)));
})

module.exports = router;