const express = require("express");
const router = express.Router();

const {
  createOrder,
  getUserOrders,
} = require("../controllers/orderController.js");

router.post("/", createOrder);
router.get("/:id", getUserOrders);

module.exports = router;
