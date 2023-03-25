const express = require("express");
const router = express.Router();
const SearchController = require("../controller/SearchController");


router.get("/search", SearchController.getSearch);



module.exports = router;