const express = require("express");
const router = express.Router();

const ErrorController = require("../controller/ErrorController");

router.get("/error", ErrorController.error500);



module.exports = router;