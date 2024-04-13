const express = require("express");

const {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

module.exports = router;
