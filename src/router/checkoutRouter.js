const express = require("express");
const router = express.Router();

const CheckoutController = require("../controller/CheckoutController.js");

const creditCardFormValidationMiddleware = require("../middlewares/creditCardFormValidationMiddleware");
const errorMiddleware = require("../middlewares/genericErrorMiddleware");

router.post("/checkout", CheckoutController.showCheckout);
router.post("/final-checkout", creditCardFormValidationMiddleware, CheckoutController.completedPurchase);


router.use(errorMiddleware);

module.exports = router;