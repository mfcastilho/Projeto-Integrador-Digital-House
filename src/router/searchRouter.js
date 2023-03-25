const express = require("express");
const router = express.Router();
const SearchController = require("../controller/SearchController");

const errorMiddleware = require("../middlewares/genericErrorMiddleware");


router.get("/search", SearchController.getSearch);


router.use(errorMiddleware);

module.exports = router;