const buildings = require('../data/buildings.json');

const getAllBuildings = (req, res)=>{
    res.send(buildings)
}

module.exports = getAllBuildings;