const express = require("express");
const router = express.Router();

const CheckoutController = require("../controller/CheckoutController.js");

const creditCardFormValidationMiddleware = require("../middlewares/creditCardFormValidationMiddleware");


router.post("/checkout", CheckoutController.showCheckout);
router.post("/final-checkout", creditCardFormValidationMiddleware, CheckoutController.completedPurchase);
// router.post("/checkout", CheckoutController.showProductInfosToBuy);
// router.get("/checkout", CheckoutController.showUserInfos);

/* router.post("/checkout", CheckoutController.); */




module.exports = router;