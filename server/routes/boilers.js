const boiler = require("../controllers/boilers.js");

const router = require("express").Router();

// Retrieve all boilers
router.get("/", boiler.findAll);

// Create a new boiler
router.post("/:id", boiler.create);

//Retrieve a single boiler with id
router.get("/:id", boiler.findOne);

// Update a boiler with id
router.put("/:id", boiler.update);

// Delete a boiler with id
router.delete("/:id", boiler.delete);


module.exports = router;
