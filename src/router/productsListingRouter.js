const express = require("express");
const router = express.Router()

const ProductsListingController = require("../controller/ProductsListingController.js");


router.get("/listagem-produtos", ProductsListingController.showProductsListing);



module.exports = router;