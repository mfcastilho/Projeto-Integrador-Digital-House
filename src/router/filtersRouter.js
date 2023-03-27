const express = require("express");
const router = express.Router();
const FiltersControllers = require("../controller/FiltersController");

// const errorMiddleware = require("../middlewares/genericErrorMiddleware");


router.get("/filtrando", FiltersControllers.colorFilter);

// router.use(errorMiddleware);


module.exports = router;