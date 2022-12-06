const express = require("express");
const router = express.Router()

const ProductsListingController = require("../controller/ProductsListingController.js");


router.get("/products-listing", ProductsListingController.showProductsListing);



module.exports = router;