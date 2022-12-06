const express = require("express");
const router = express.Router()

const ShoppingCartController = require("../controller/ShoppingCartController.js");


router.get("/carrinho", ShoppingCartController.showShoppingCart);





module.exports = router;