const express = require("express");
const router = express.Router()

const ShoppingCartController = require("../controller/ShoppingCartController.js");


router.get("/carrinho", ShoppingCartController.showShoppingCart);

router.post("/carrinho", ShoppingCartController.getProductInfosToBuy);
// router.post("/carrinho", ShoppingCartController.getProductInfosToBuy);



module.exports = router;