const express = require("express");
const router = express.Router()

const ShoppingCartController = require("../controller/ShoppingCartController.js");


router.get("/carrinho", ShoppingCartController.showShoppingCart);

router.post("/produto/:id/masculino", ShoppingCartController.getProductInfosToBuy);
router.post("/produto/:id/feminino", ShoppingCartController.getProductInfosToBuy);



module.exports = router;