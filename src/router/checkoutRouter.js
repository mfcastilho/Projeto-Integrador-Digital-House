const express = require("express");
const router = express.Router();

const CheckoutController = require("../controller/CheckoutController.js");

router.get("/checkout", CheckoutController.showCheckout);
router.get("/checkout", CheckoutController.showProductInfosToBuy);

router.post("/checkout", CheckoutController.);




module.exports = router;