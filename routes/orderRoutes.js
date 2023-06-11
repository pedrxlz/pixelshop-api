const express = require("express");
const router = express.Router();

const {
  createOrder,
  getOrder,
  deleteOrder,
  updateOrder,
  getUserOrders,
} = require("../controllers/orderController.js");

router.post("/", createOrder);
router.put("/:id", updateOrder);
router.get("/:id", getOrder);
router.delete("/:id", deleteOrder);
router.put("/", getUserOrders);

module.exports = router;
