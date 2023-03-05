const express = require("express");
const router = express.Router();

const AdminController = require("../controller/AdminController");

router.get("/admin/home", AdminController.showHomeAdmin);


module.exports = router;