const express = require('express');
const router = express.Router();
const boylers = require('../data/boylers.json');
const fs = require('fs');

router.get('/', (req, res) => res.send(boylers));


router.get('/by-id/:id', (req, res) => {
    const found = boylers.some(boyler => boyler.id === parseInt(req.params.id));
    
    if(found) {
        res.json(boylers.filter(boyler => boyler.id === parseInt(req.params.id)));
    }
    else {
        res.status(400).json({ msg: `Boyler with the id of ${req.params.id} not found`})
    }
});


router.get('/by-id-type/:idType', (req, res) => {
    const found = boylers.some(boyler => boyler.idType === parseInt(req.params.idType));

    if(found) {
        res.json(boylers.filter(boyler => boyler.idType === parseInt(req.params.idType)));
    }
    else {
        res.status(400).json({ msg: `Boyler with idType ${req.params.idType} not found`});
    }
})


router.delete('/delete-by-id/:id', (req, res) => {
    const data = JSON.parse(fs.readFileSync('data/boylers.json'));
    fs.writeFileSync('data/boylers.json', JSON.stringify(data.filter(boyler => boyler.id !== parseInt(req.params.id))));
    res.json(data.filter(boyler => boyler.id !== parseInt(req.params.id)));
})

module.exports = router;