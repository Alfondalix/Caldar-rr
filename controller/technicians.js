const express = require ("express");
const app = express();
const path = require ("path");
const data = require("./data/data");

app.listen(3000, () => {
    console.log("aplicación corriendo puerto 3000");
});
// get all techs
app.get("/api/techs", (req,res) =>{
    res.send(data)});

// get techs by id

app.get("/api/techs/:id", (req,res) =>{
        const found = data.some(data => data.idTech === parseInt(req.params.id));

        if (found) {
            res.json(data.filter(data => data.idTech === parseInt(req.params.id)));
        } else {
            res.status(400).json({msg:`No tech with the id of ${req.params.id}`})};
})

// get techs by type of boiler
app.get("/api/techsTypes/:types", (req,res) =>{
    const found = data.some(data => data.types === parseInt(req.params.types));

    if (found) {
        res.json(data.filter(data => data.types === parseInt(req.params.types)));
    } else {
        res.status(400).json({msg:`No tech with the the experience to fix boiler type ${req.params.types}`})};

})

// delete techs by id
app.delete("/api/deleteTechs/:id", (req,res) =>{
    const found = data.some(data => data.idTech === parseInt(req.params.id));

    if (found) {
        res.json(data.filter(data => data.idTech !== parseInt(req.params.id)));
    } else {
        res.status(400).json({msg:`No tech with the id of ${req.params.id}`})};
})



/*
app.get("/", (request, response)=>{
    response.sendFile(path.resolve(__dirname,"index.html"))
})
*/
