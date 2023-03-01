const express = require("express");
const router = express.Router()

const HomeController = require("../controller/HomeController.js");


router.get("/", HomeController.showHome);
router.get("/home", HomeController.showHome);




module.exports = router;