const express = require("express");
const router = express.Router();

const {
  getProduct,
  getProducts,
  searchProduct,
} = require("../controllers/productController.js");

router.get("/:id", getProduct);
router.get("/", getProducts);
router.put("/", searchProduct);

module.exports = router;
