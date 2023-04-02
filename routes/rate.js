const express = require("express");
const router = express.Router();

const { getRate } = require("../controllers/rate");

router.post("/", getRate);

module.exports = router;
