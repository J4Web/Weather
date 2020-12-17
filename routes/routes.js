const express = require('express');
const router = express.Router();
const https=require('https');
const controller = require("../controller/controller");

router.get('/', controller.renderHomePage);
router.post('/', controller.renderweatherPage);
router.get("/create", controller.renderAboutPage);

module.exports = router;