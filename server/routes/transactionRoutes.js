const express = require("express");

const {
  getTransactions,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  searchTransactions,
} = require("../controllers/transactionController");

const router = express.Router();
router.get("/search", searchTransactions);


router.get("/", getTransactions);
router.post("/", createTransaction);
router.put("/:id", updateTransaction);
router.delete("/:id", deleteTransaction);
module.exports = router;