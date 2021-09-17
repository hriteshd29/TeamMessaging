var express = require('express');
var router = express.Router();
var profileRouter = require('./profile')
router.use("/profile", profileRouter);
// router.use("/channels");

module.exports = router;