const express = require("express");
const router = express.Router();


const UserPanelPersonalDataController = require("../controller/UserPanelPersonalDataController.js");


router.get("/user-panel-personal-data", UserPanelPersonalDataController.showUserPanelPersonalData);

module.exports = router;