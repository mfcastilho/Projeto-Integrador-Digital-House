const express = require("express");
const router = express.Router();


const UserPanelPersonalDataController = require("../controller/UserPanelPersonalDataController.js");


router.get("/usuario/dados-pessoais", UserPanelPersonalDataController.showUserPanelPersonalData);

module.exports = router;