const express = require("express");
const router = express.Router()

const ShoppingCartController = require("../controller/ShoppingCartController.js");


router.get("/shopping-cart", ShoppingCartController.showShoppingCart);





module.exports = router;