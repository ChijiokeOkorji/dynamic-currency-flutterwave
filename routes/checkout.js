const express = require("express");
const router = express.Router();

const { generateCheckout } = require("../controllers/checkout");

router.post("/", generateCheckout);

module.exports = router;
