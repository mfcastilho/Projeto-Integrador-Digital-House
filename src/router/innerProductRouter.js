const express = require("express");
const router = express.Router();


const InnerProductController = require("../controller/InnerProductController.js");


router.get("/produto/:id", InnerProductController.showProduct);




module.exports = router;