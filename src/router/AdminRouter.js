const express = require("express");
const router = express.Router();

const AdminController = require("../controller/AdminController");
const isLoginMiddleware = require("../middlewares/isLoginMiddleware");
const isAdminMiddleware = require("../middlewares/isAdminMiddleware");


router.use(isAdminMiddleware);
router.use(isLoginMiddleware);

router.get("/admin/home", AdminController.showHomeAdmin);


module.exports = router;