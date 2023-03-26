const express = require("express");
const router = express.Router();
const FiltersControllers = require("../controller/FiltersController");


router.get("/filtrando", FiltersControllers.colorFilter);


module.exports = router;